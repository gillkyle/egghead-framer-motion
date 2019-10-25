/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      examples: allSitePage(filter: { path: { regex: "/examples/" } }) {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)
  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <nav
          sx={{
            display: "flex",
            flexDirection: "row",
            placeItems: "center",
            height: 30,
            mb: 20,
          }}
        >
          {data.examples.edges.map(({ node }, index) => (
            <Link
              key={index}
              sx={{
                padding: `0.5rem`,
                textDecoration: "none",
                color: "bright",
                fontWeight: 700,
                transition: "all 0.3s ease-in-out",
                textTransform: "capitalize",
                borderRadius: `2`,
                "&:hover": {
                  color: "background",
                  backgroundColor: "soft",
                },
              }}
              to={node.path}
            >
              {node.path.slice(10, node.path.length - 1)}
            </Link>
          ))}
        </nav>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
