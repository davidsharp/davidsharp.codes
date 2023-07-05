import Links from './links.jsx'
import A from './anchor.jsx'
import {
  Twitter,
  Instagram,
  Github,
  Glitch,
  LinkedIn,
  ItchIo,
} from './icons.jsx'

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