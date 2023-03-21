import Box from './box.jsx'
import Links from './links.jsx'
import SocialLinks from './social-links.jsx'

import styled from 'https://esm.sh/styled-components@5.3.0'

/*import {
  AiFillHome as Home
} from 'npm:react-icons/ai'*/
const Home = () => <span>{'Home'}</span>

// seems to break rendering
const A = styled.a`&:[aria-current="page"]{border-bottom:solid}`

const NavRow = props => <Box className="navbar" boxStyle={{width:'100%'}} style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
  <Links>
    <a href="/" aria-label="home" title="home">
      <span aria-hidden="true">
        <Home/>
      </span>
    </a>
    <a href="/about/">About</a>
    <a href="/projects/">Projects</a>
  </Links>
  <SocialLinks/>
</Box>

export default NavRow