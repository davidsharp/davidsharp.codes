import Box from './box.jsx'
import Links from './links.jsx'
import SocialLinks from './social-links.jsx'

import {
  Home
} from './icons.jsx'

const A = ({route,children,...props}) => <a className={'navlink'} aria-current={ route == props.href && "page"}  {...props}>
  {children}
</a>

const NavRow = ({route}) => <Box className="navbar" boxStyle={{width:'100%'}} style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
  <Links>
    <A href="/"  route={route} aria-label="home" title="home">
      <span aria-hidden="true">
        <Home/>
      </span>
    </A>
    <A href="/about" route={route}>About</A>
    <A href="/projects" route={route}>Projects</A>
  </Links>
  <SocialLinks/>
</Box>

export default NavRow