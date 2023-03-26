import Box from './box.jsx'
import Links from './links.jsx'
import SocialLinks from './social-links.jsx'

/*import {
  AiFillHome as Home
} from 'npm:react-icons/ai'*/
const Home = () => <span>{'Home'}</span>

// seems to break rendering
const A = ({children,...props}) => <a className={'navlink'} {...props}>
  {children}
</a>

const NavRow = props => <Box className="navbar" boxStyle={{width:'100%'}} style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
  <Links>
    <A href="/" aria-label="home" title="home">
      <span aria-hidden="true">
        <Home/>
      </span>
    </A>
    <A href="/about/">About</A>
    <A href="/projects/">Projects</A>
  </Links>
  <SocialLinks/>
</Box>

export default NavRow