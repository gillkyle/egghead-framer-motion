/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import { motion } from "framer-motion"
import { FiChevronRight, FiArrowUpCircle } from "react-icons/fi"

import ExampleLayout from "../../components/example-layout"

const containerStyles = {
  display: `flex`,
  padding: `1`,
  borderRadius: `1`,
  backgroundColor: `soft`,
  "& div": {
    display: `flex`,
    alignItems: `center`,
    marginLeft: `5px`,
  },
}

const containerVariants = {
  open: {
    width: `240px`,
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    width: `60px`,
    transition: {
      staggerChildren: 0.1,
      when: "afterChildren",
      staggerDirection: -1,
    },
  },
}

const childVariants = {
  open: { opacity: 0.8 },
  closed: { opacity: 0 },
}

export default ({ location }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ExampleLayout location={location}>
      <motion.div
        sx={{ ...containerStyles }}
        initial={`closed`}
        animate={isOpen ? `open` : `closed`}
        variants={containerVariants}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiChevronRight size={48} />
        </motion.div>
        {[0, 180, 270, 90].map(value => (
          <motion.div
            initial={{ opacity: 0 }}
            variants={childVariants}
            style={{ rotate: value }}
          >
            <FiArrowUpCircle size={36} />
          </motion.div>
        ))}
      </motion.div>
    </ExampleLayout>
  )
}
