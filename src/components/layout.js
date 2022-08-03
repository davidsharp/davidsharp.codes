/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link as GLink } from "gatsby"
import styled from 'styled-components'

import HomeHeader from "./header"
import Header from './other-header'
import "./layout.css"

const Layout = ({ home, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {home?
        <HomeHeader siteTitle={data.site.siteMetadata.title}/> :
        <Header siteTitle={data.site.siteMetadata.title} />
      }
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, built by <Link to="/about/">David</Link> himself
        </footer>
      </div>
    </>
  )
}

const Link = styled(props=><GLink {...props}/>)`
  &:link, &:visited, &:active {
    color: inherit
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
