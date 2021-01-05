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
  <A href="https://twitter.com/elitefreq"><Twitter/></A>
  <A href="https://www.instagram.com/coin.op/"><Instagram/></A>
  <A href="https://github.com/davidsharp"><Github/></A>
  <A href="https://glitch.com/@davidsharp"><Glitch/></A>
  <A href="https://www.linkedin.com/in/david-sharp-9b054361/"><LinkedIn/></A>
</Links>

export default SocialLinks