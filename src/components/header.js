import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AppBar } from '@material-ui/core'


//부모 컴포넌트에서 받은 Props { siteTitle }
const Header = ({ siteTitle }) => (
  <AppBar
    style={{
      background: `white`,
      position: `sticky`,
      display: `inline-flex`,
      flexDirection: `row`,
      justifyContent: `space-between`
    }}
  >
    <div>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
