import {
  SiTwitter as Twitter,
  SiInstagram as Instagram,
  SiGithub as Github,
  SiGlitch as Glitch,
  SiLinkedin as LinkedIn,
} from 'react-icons/si'

import React from 'react'
import A from './anchor'

const GH= ({children,...props}) => <>
  <A {...props}>{children} <Github/></A>
</>

export default GH
