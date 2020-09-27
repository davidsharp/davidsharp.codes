import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  IoIosMail as Email
} from 'react-icons/io'
import {
  SiTwitter as Twitter,
  SiInstagram as Instagram,
  SiGithub as Github,
  SiGlitch as Glitch,
} from 'react-icons/si'


//import "./home-hero.css"
import "./icon.css"

const Hero = ({ siteTitle }) => (
  <section className="block">
    <div className="box">
      {/*<h1 className="name"><span>david</span><span>sharp</span><span>codes</span></h1>*/}
      <div className="links">
        <a className="ion ion-email" id="my-email"><Email/></a>{`・`}
        <a className="ion ion-social-twitter" href="https://twitter.com/elitefreq"><Twitter/></a>{`・`}
        <a className="ion ion-social-instagram" href="https://www.instagram.com/coin.op/"><Instagram/></a>{`・`}
        <a className="ion ion-social-github" href="https://github.com/davidsharp"><Github/></a>{`・`}
        <a className="ion glitch-fish" href="https://glitch.com/@davidsharp"><Glitch/></a>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
