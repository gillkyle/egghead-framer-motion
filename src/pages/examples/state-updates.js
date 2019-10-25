/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import { motion } from "framer-motion"
import { FiArrowUpCircle } from "react-icons/fi"

import Layout from "../../components/layout"
import Section from "../../components/section"

export default () => {
  const [rotation, toggleRotation] = useState(0)

  return (
    <Layout>
      <Section>
        <motion.div
          animate={{ rotate: rotation }}
          onClick={() => toggleRotation(rotation + 180)}
        >
          <FiArrowUpCircle size={48} />
        </motion.div>
      </Section>
    </Layout>
  )
}
