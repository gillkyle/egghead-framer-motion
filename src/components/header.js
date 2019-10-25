/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      background:
        "linear-gradient(180deg, #f08, #d0e, #91f, #70f, #40f, #05f, #09f) center 0% / 100% 500% no-repeat",
      marginBottom: `1.45rem`,
      padding: `6rem 4rem`,
      textAlign: `center`,
      fontWeight: 700,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        zIndex: 3,
      }}
    >
      <span sx={{ fontSize: 20, textTransform: "uppercase" }}>Using</span>
      <h1 style={{ margin: 0, fontSize: 48 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
