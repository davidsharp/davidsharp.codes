import React from 'react'
import Box from './box'
import Links from './links'
import SocialLinks from './social-links'
import {Link} from 'gatsby'
import {
  AiFillHome as Home
} from 'react-icons/ai'

const NavRow = props => <Box style={{width:'100%', display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
  <Links>
    <Link to="/"><Home/></Link>
    <Link to="/about/">About</Link>
    <Link to="/about/">Example</Link>
    <Link to="/about/">Example</Link>
  </Links>
  <SocialLinks/>
</Box>

export default NavRow