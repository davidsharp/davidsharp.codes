import React from 'react'
import Box from './box'
import Links from './links'
import SocialLinks from './social-links'
import {Link as GLink} from 'gatsby'
import {
  AiFillHome as Home
} from 'react-icons/ai'

import styled from 'styled-components'

const Link = styled(props => <GLink {...props} />)`
  &[aria-current="page"]{border-bottom:solid}
`

const Navbar = styled(props => <Box {...props} />)`
  display: flex;
  flexDirection: row;
  justifyContent: space-around;
  font-family: 'Balsamiq Sans', Helvetica, sans-serif;
`

const NavRow = props => <Navbar boxStyle={{width:'100%'}}>
  <Links>
    <Link to="/" aria-label="home" title="home">
      <span aria-hidden="true">
        <Home/>
      </span>
    </Link>
    <Link to="/about/">About</Link>
    <Link to="/projects/">Projects</Link>
  </Links>
  <SocialLinks/>
</Navbar>

export default NavRow