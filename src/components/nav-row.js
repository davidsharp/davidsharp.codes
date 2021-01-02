import React from 'react'
import Box from './box'
import Links from './links'
import SocialLinks from './social-links'
import {Link} from 'gatsby'
import {
  AiFillHome as Home
} from 'react-icons/ai'

import {Location} from '@reach/router'

const NavRow = props => <Box style={{width:'100%', display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
  <Location>
      {({ location }) => <Links current={location.pathname}>
    <AwareLink location={location} to="/"><Home/></AwareLink>
    <AwareLink location={location} to="/about/">About</AwareLink>
  </Links>}
  </Location>
  
  <SocialLinks/>
</Box>

const AwareLink = ({location, to, children, style, currentStyle={borderBottom:'solid'}, ...props}) => (
  <Link to={to} style={{...(location.pathname==to?currentStyle:{}),...style}} {...props}>{children}</Link>
)

export default NavRow