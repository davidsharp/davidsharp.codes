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

const Navbar = styled(props => <Box boxStyle={{width:'100%'}} style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}} {...props} />)`
  font-family: 'Balsamiq Sans', Helvetica, sans-serif;
`

const NavRow = props => <Navbar>
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