import React from 'react'
import Links from './links'
import A from './anchor'
import {
  IoIosMail as Email
} from 'react-icons/io'
import {
  SiTwitter as Twitter,
  SiInstagram as Instagram,
  SiGithub as Github,
  SiGlitch as Glitch,
  SiLinkedin as LinkedIn,
} from 'react-icons/si'

const SocialLinks = props => <Links>
  <A title="Twitter" href="https://twitter.com/elitefreq" ariaHidden><Twitter/></A>
  <A title="Instagram" href="https://www.instagram.com/coin.op/" ariaHidden><Instagram/></A>
  <A title="GitHub" href="https://github.com/davidsharp" ariaHidden><Github/></A>
  <A title="Glitch" href="https://glitch.com/@davidsharp" ariaHidden><Glitch/></A>
  <A title="LinkedIn" href="https://www.linkedin.com/in/david-sharp-9b054361/" ariaHidden><LinkedIn/></A>
</Links>

export default SocialLinks