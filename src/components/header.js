import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Properties from '../properties';

const Header = ({ siteTitle }) => (
  <header
    style={{
      //background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, width: '100%', textAlign: 'center', fontSize: '4rem', fontFamily: 'Fredoka One, Helvetica, sans-serif' }}>
        <Link
          to="/"
          style={{
            color: Properties.colour[3],
            textShadow: `${Properties.colour[4]} 5px 5px 0`,//`rgba(0,0,0,.8) 5px 5px 0`,
            textDecoration: `none`,
          }}
        >
          {/*siteTitle*/`David Sharp`}
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
