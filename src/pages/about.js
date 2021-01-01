import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Bio from '../components/bio'
import Box from '../components/box'
import Colour from '../components/colour'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Bio header/>
    <Box header="About this site">
      <p>This site was built using Gatsby and running on Netlify</p>
      <p>The typeface is Helvetica</p>
      <p>The palette uses <Colour hex="FEDF00"/> for the background</p>
    </Box>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
