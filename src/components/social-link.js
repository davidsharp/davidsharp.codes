import {
  SiTwitter as Twitter,
  SiInstagram as Instagram,
  SiGithub as Github,
  SiGlitch as Glitch,
  SiLinkedin as LinkedIn,
} from 'react-icons/si'

import React from 'react'
import A from './anchor'

const SocialLink = ({Social,children,...props}) => <>
  <A {...props}>{children} <Social/></A>
</>

const GH = (props) => <SocialLink Social={Github} {...props}/>
const Tw = (props) => <SocialLink Social={Twitter} {...props}/>
const Gl = (props) => <SocialLink Social={Glitch} {...props}/>

export {GH, Tw, Gl}
export default SocialLink