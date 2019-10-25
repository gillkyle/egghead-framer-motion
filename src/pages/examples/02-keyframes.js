/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import ExampleLayout from "../../components/example-layout"
import { FiCrosshair } from "react-icons/fi"

export default ({ location }) => (
  <ExampleLayout location={location} canReset={true}>
    <motion.div
      animate={{
        x: [0, 25, 75, 200],
      }}
      transition={{
        times: [0, 0.2, 0.5, 1],
        duration: 2,
        ease: "easeInOut",
        repeatDelay: 0.5,
      }}
    >
      <FiCrosshair size={48} />
    </motion.div>
  </ExampleLayout>
)
