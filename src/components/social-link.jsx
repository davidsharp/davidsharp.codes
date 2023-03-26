import {
  Twitter,
  Github,
  Glitch,
  ItchIo,
} from './icons.jsx'

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
