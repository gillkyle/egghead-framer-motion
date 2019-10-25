/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, location }) => {
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
  const locationTitle = location.pathname.slice(
    10,
    location.pathname.length - 1
  )
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
          {data.examples.edges.map(({ node }, index) => {
            const nodeTitle = node.path.slice(10, node.path.length - 1)
            return (
              <Link
                key={index}
                sx={{
                  padding: `0.5rem`,
                  textDecoration: "none",
                  color: nodeTitle === locationTitle ? "yellow" : "bright",
                  fontWeight: 700,
                  transition: "all 0.3s ease-in-out",
                  textTransform: "capitalize",
                  borderRadius: `2`,
                  "&:hover": {
                    color:
                      nodeTitle === locationTitle ? "yellow" : "background",
                    backgroundColor: "soft",
                  },
                }}
                to={node.path}
              >
                {nodeTitle}
              </Link>
            )
          })}
        </nav>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
