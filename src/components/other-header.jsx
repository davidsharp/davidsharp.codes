import Properties from '../properties.js';
//import './outline.css'
import NavRow from './nav-row.jsx'

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <span
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex'
      }}
    >
      <h1 style={{ margin: 0, paddingRight: '.5em', textAlign: 'center', fontSize: '4rem', fontFamily: 'Fredoka One, Helvetica, sans-serif' }}>
        <a
          href="./"
          className="xoutline"
          style={{
            color: Properties.colour[3],
            textShadow: `${Properties.colour[4]} 5px 5px 0`,//`rgba(0,0,0,.8) 5px 5px 0`,
            textDecoration: `none`,
          }}
        >
          {'D'}
        </a>
      </h1>
      <NavRow/>
    </span>
  </header>
)

export default Header
