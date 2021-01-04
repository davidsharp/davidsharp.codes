import React from 'react'
import Links from './links'
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
  <a href="https://twitter.com/elitefreq" target='_blank'><Twitter/></a>
  <a href="https://www.instagram.com/coin.op/" target='_blank'><Instagram/></a>
  <a href="https://github.com/davidsharp" target='_blank'><Github/></a>
  <a href="https://glitch.com/@davidsharp" target='_blank'><Glitch/></a>
  <a href="https://www.linkedin.com/in/david-sharp-9b054361/" target='_blank'><LinkedIn/></a>
</Links>

export default SocialLinks