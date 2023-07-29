export {
  AiFillHome as Home
} from 'react-icons/ai';

import {
  siTwitter,
  siInstagram,
  siGithub,
  siGlitch,
  siLinkedin,
  siItchdotio,
} from 'https://esm.sh/simple-icons@9.7.0'

const Icon = ({path}) => <svg stroke="currentColor" fill="currentColor" stroke-width="0"  role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d={path}/></svg>

const Twitter = () => <Icon path={siTwitter.path}/>
const Instagram = () => <Icon path={siInstagram.path}/>
const Github = () => <Icon path={siGithub.path}/>
const Glitch = () => <Icon path={siGlitch.path}/>
const LinkedIn = () => <Icon path={siLinkedin.path}/>
const ItchIo = () => <Icon path={siItchdotio.path}/>

export {
  Twitter,
  Instagram,
  Github,
  Glitch,
  LinkedIn,
  ItchIo,
}
