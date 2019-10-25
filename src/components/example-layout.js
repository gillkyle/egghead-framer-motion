import React from "react"
import Layout from "./layout"
import Section from "./section"

const ExampleLayout = ({ location, canReset, children }) => {
  return (
    <Layout location={location}>
      <Section canReset={canReset}>{children}</Section>
    </Layout>
  )
}

export default ExampleLayout
