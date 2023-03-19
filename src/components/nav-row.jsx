import Box from './box.jsx'
import Links from './links.jsx'
import SocialLinks from './social-links.jsx'
/*import {
  AiFillHome as Home
} from 'npm:react-icons/ai'*/
const Home = <span>{'Home'}</span>

//import './current-page.css'

const NavRow = props => <Box className="navbar" boxStyle={{width:'100%'}} style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
  <Links>
    <a href="/" aria-label="home" title="home">
      <span aria-hidden="true">
        <Home/>
      </span>
    </a>
    <a to="/about/">About</a>
    <a to="/projects/">Projects</a>
  </Links>
  <SocialLinks/>
</Box>

export default NavRow