import {
  siTwitter,
  siInstagram,
  siGithub,
  siGlitch,
  siLinkedin,
  siItchdotio,
} from 'https://esm.sh/simple-icons@9.7.0'

const siViewbox = "0 0 24 24"
const faViewbox = "0 0 576 512"

const Icon = ({path,viewBox=siViewbox}) => <svg stroke="currentColor" fill="currentColor" stroke-width="0"  role="img" viewBox={viewBox} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d={path}/></svg>

const Home = () => <Icon viewBox={faViewbox} path={"M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"}/> // https://fontawesome.com/license/free
const Twitter = () => <Icon path={siTwitter.path}/>
const Instagram = () => <Icon path={siInstagram.path}/>
const Github = () => <Icon path={siGithub.path}/>
const Glitch = () => <Icon path={siGlitch.path}/>
const LinkedIn = () => <Icon path={siLinkedin.path}/>
const ItchIo = () => <Icon path={siItchdotio.path}/>

export {
  Home,
  Twitter,
  Instagram,
  Github,
  Glitch,
  LinkedIn,
  ItchIo,
}
