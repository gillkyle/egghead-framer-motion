/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import { motion } from "framer-motion"
import { FiArrowUpCircle } from "react-icons/fi"

import ExampleLayout from "../../components/example-layout"

export default ({ location }) => {
  const [rotation, toggleRotation] = useState(0)

  return (
    <ExampleLayout location={location}>
      <motion.div
        animate={{ rotate: rotation }}
        onClick={() => toggleRotation(rotation + 180)}
      >
        <FiArrowUpCircle size={48} />
      </motion.div>
    </ExampleLayout>
  )
}
