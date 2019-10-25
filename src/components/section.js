/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import { FiRepeat } from "react-icons/fi"
import { motion } from "framer-motion"

export default ({ children, canReset = false }) => {
  const [key, incrementKey] = useState(0)
  return (
    <section
      key={key}
      sx={{
        display: "flex",
        margin: `0 auto`,
        borderRadius: `2`,
        border: `1px solid #232323`,
        padding: `2rem`,
        position: `relative`,
      }}
    >
      {canReset && (
        <motion.div
          sx={{
            display: `flex`,
            position: `absolute`,
            right: `3`,
            top: `3`,
            p: `2`,
            backgroundColor: `soft`,
            borderRadius: `1`,
          }}
          onClick={() => incrementKey(key + 1)}
          whileHover={{ scale: 1.05 }}
        >
          <FiRepeat />
        </motion.div>
      )}
      {children}
    </section>
  )
}
