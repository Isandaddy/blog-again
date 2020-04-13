import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//부모 컴포넌트에서 받은 Props { siteTitle }
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      borderStyle: `solid`,
      borderImage: `linear-gradient(to right, #01c9ca 0%, #3886FF 100%)`,
      borderImageSlice: `1`,
      borderImageWidth: `0 0 10px 0`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
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
