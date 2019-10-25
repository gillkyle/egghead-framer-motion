/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import Layout from "../../components/layout"
import Section from "../../components/section"
import PlayButton from "../../components/play-button"

export default () => (
  <Layout>
    <Section>
      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
        <PlayButton />
      </motion.div>
    </Section>
  </Layout>
)
