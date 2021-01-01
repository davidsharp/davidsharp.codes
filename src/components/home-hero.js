import PropTypes from "prop-types"
import React from "react"
import SocialLinks from "./social-links"

const Hero = ({ siteTitle }) => (
  <section className="block">
    <div className="box">
      <SocialLinks/>
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
