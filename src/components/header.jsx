import Properties from '../properties.js';
//import './outline.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, width: '100%', textAlign: 'center', fontSize: '4rem', fontFamily: 'Fredoka One, Helvetica, sans-serif' }}>
        <a
          href="/"
          className="xoutline"
          style={{
            color: Properties.colour[3],
            textShadow: `${Properties.colour[4]} 5px 5px 0`,
            textDecoration: `none`,
          }}
        >
          {`David Sharp`}
        </a>
      </h1>
    </div>
  </header>
)

export default Header
