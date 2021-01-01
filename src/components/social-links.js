import React from 'react'
import {
  IoIosMail as Email
} from 'react-icons/io'
import {
  SiTwitter as Twitter,
  SiInstagram as Instagram,
  SiGithub as Github,
  SiGlitch as Glitch,
} from 'react-icons/si'

import "./icon.css"

const SocialLinks = props => <div className="links" style={{textAlign:'center'}}>
  {/*<a id="my-email"><Email/></a>{`・`}*/}
  <a href="https://twitter.com/elitefreq"><Twitter/></a>{`・`}
  <a href="https://www.instagram.com/coin.op/"><Instagram/></a>{`・`}
  <a href="https://github.com/davidsharp"><Github/></a>{`・`}
  <a href="https://glitch.com/@davidsharp"><Glitch/></a>
</div>

export default SocialLinks