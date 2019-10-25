/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import { FiLoader } from "react-icons/fi"

import Layout from "../../components/layout"
import Section from "../../components/section"

export default ({ location }) => (
  <Layout location={location}>
    <Section>
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
    </Section>
  </Layout>
)
