/*import {
  SiTwitter as Twitter,
  SiInstagram as Instagram,
  SiGithub as Github,
  SiGlitch as Glitch,
  SiLinkedin as LinkedIn,
  SiItchdotio as ItchIo,
} from 'npm:react-simple-icons'*/

import A from './anchor.jsx'

const SocialLink = ({Social,children,...props}) => <>
  <A {...props}>{children} <Social/></A>
</>

const GH = (props) => <SocialLink Social={null||Github} {...props}/>
const Tw = (props) => <SocialLink Social={null||Twitter} {...props}/>
const Gl = (props) => <SocialLink Social={null||Glitch} {...props}/>
const Itch = (props) => <SocialLink Social={null||ItchIo} {...props}/>

export {GH, Tw, Gl, Itch}
export default SocialLink
