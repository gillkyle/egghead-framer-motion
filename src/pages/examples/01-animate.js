/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import { FiCircle } from "react-icons/fi"

import ExampleLayout from "../../components/example-layout"

export default ({ location }) => (
  <ExampleLayout location={location} canReset={true}>
    <motion.div animate={{ x: 100 }} transition={{ duration: 0.5 }}>
      <FiCircle size={48} />
    </motion.div>
  </ExampleLayout>
)
