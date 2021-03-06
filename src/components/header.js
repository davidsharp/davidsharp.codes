import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Properties from '../properties';
import './outline.css'

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
      <h1 style={{ margin: 0, width: '100%', textAlign: 'center', fontSize: '4rem', fontFamily: 'Helvetica, sans-serif' }}>
        <Link
          to="/"
          className="outline"
          style={{
            color: Properties.colour[1],
            textShadow: `.3rem .3rem ${Properties.colour[0]}`,
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
