/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import ExampleLayout from "../../components/example-layout"
import PlayButton from "../../components/play-button"

export default ({ location }) => (
  <ExampleLayout location={location}>
    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
      <PlayButton />
    </motion.div>
  </ExampleLayout>
)
