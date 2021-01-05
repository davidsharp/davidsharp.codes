import React from 'react'
import Box from './box'
import Links from './links'
import SocialLinks from './social-links'
import {Link} from 'gatsby'
import {
  AiFillHome as Home
} from 'react-icons/ai'

import './current-page.css'

const NavRow = props => <Box className="navbar" boxStyle={{width:'100%'}} style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
  <Links>
    <Link to="/" aria-label="home" title="home">
      <span aria-hidden="true">
        <Home/>
      </span>
    </Link>
    <Link to="/about/">About</Link>
  </Links>
  <SocialLinks/>
</Box>

export default NavRow