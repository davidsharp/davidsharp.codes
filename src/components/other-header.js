import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Properties from '../properties';
import './outline.css'
import NavRow from './nav-row.js'
import Box from "./box";
import Links from './links'
import SocialLinks from "./social-links";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <span
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex'
      }}
    >
      <h1 style={{ margin: 0, paddingRight: '.5em', textAlign: 'center', fontSize: '4rem', fontFamily: 'Helvetica, sans-serif' }}>
        <Link
          to="/"
          className="outline"
          style={{
            color: Properties.colour[1],
            textShadow: `.3rem .3rem ${Properties.colour[0]}`,
            textDecoration: `none`,
          }}
        >
          {'DSC'}
        </Link>
      </h1>
      <NavRow/>
    </span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
