/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import { FiCircle } from "react-icons/fi"

import Layout from "../../components/layout"
import Section from "../../components/section"

export default ({ location }) => (
  <Layout location={location}>
    <Section canReset={true}>
      <motion.div animate={{ x: 100 }} transition={{ duration: 0.5 }}>
        <FiCircle size={48} />
      </motion.div>
    </Section>
  </Layout>
)
