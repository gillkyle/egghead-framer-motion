/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import ExampleLayout from "../../components/example-layout"
import { FiCrosshair } from "react-icons/fi"

export default ({ location }) => (
  <ExampleLayout location={location} canReset={true}>
    <motion.div
      animate={{
        x: [0, 25, 50, 50, 200],
      }}
      transition={{
        times: [0, 0.2, 0.4, 0.6, 1],
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <FiCrosshair size={48} />
    </motion.div>
  </ExampleLayout>
)
