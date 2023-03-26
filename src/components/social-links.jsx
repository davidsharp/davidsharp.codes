import Links from './links.jsx'
import A from './anchor.jsx'
import {
  SiTwitter as Twitter,
  SiInstagram as Instagram,
  SiGithub as Github,
  SiGlitch as Glitch,
  SiLinkedin as LinkedIn,
  SiItchdotio as ItchIo,
} from 'https://esm.sh/react-icons/si?alias=react:preact/compat&deps=react'

const SocialLinks = props => <Links>
  <A title="Twitter" href="https://twitter.com/elitefreq" ariaHidden><Twitter/></A>
  <A title="Instagram" href="https://www.instagram.com/coin.op/" ariaHidden><Instagram/></A>
  <A title="GitHub" href="https://github.com/davidsharp" ariaHidden><Github/></A>
  <A title="Glitch" href="https://glitch.com/@davidsharp" ariaHidden><Glitch/></A>
  <A title="LinkedIn" href="https://www.linkedin.com/in/david-sharp-9b054361/" ariaHidden><LinkedIn/></A>
  <A title="Itch.io" href="https://davidsharp.itch.io/" ariaHidden><ItchIo/></A>
  {/*TODO - add cohost link*/}
</Links>

export default SocialLinks