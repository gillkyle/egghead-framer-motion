/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import { FiLoader } from "react-icons/fi"

import ExampleLayout from "../../components/example-layout"

export default ({ location }) => (
  <ExampleLayout location={location}>
    <motion.div
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 0.9, opacity: 0.75 }}
      transition={{
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeIn",
      }}
    >
      <FiLoader size={48} />
    </motion.div>
  </ExampleLayout>
)
