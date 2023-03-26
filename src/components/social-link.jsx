import {
  SiTwitter as Twitter,
  SiInstagram as Instagram,
  SiGithub as Github,
  SiGlitch as Glitch,
  SiLinkedin as LinkedIn,
  SiItchdotio as ItchIo,
} from 'https://esm.sh/react-icons/si?alias=react:preact/compat&deps=react'

import A from './anchor.jsx'

const SocialLink = ({Social,children,...props}) => <>
  <A {...props}>{children} <Social/></A>
</>

const GH = (props) => <SocialLink Social={Github} {...props}/>
const Tw = (props) => <SocialLink Social={Twitter} {...props}/>
const Gl = (props) => <SocialLink Social={Glitch} {...props}/>
const Itch = (props) => <SocialLink Social={ItchIo} {...props}/>

export {GH, Tw, Gl, Itch}
export default SocialLink
