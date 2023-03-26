import { Head, asset } from "$fresh/runtime.ts";

import HomeHeader from "./header.jsx"
import Header from './other-header.jsx'

const Layout = ({ home, title, children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("/layout.css")} />
        <link rel="stylesheet" href={asset("/base.css")} />
        <link rel="stylesheet" href={asset("/icon.css")} />
        <link rel="stylesheet" href={asset("/bio.css")} />
        <link rel="stylesheet" href={asset("/outline.css")} />
        <link rel="icon" href={asset("/logo.svg")} type="image/svg+xml"/>
      </Head>
      {home?
        <HomeHeader siteTitle={title||'title not set'}/> :
        <Header siteTitle={title||'title not set'} />
      }
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, built by <a href="./about/">David</a> himself
        </footer>
      </div>
    </>
  )
}

export default Layout
