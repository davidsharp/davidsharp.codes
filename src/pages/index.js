import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import List from "../components/list"
import Hero from "../components/home-hero"
import Bio from "../components/bio"
import Box from '../components/box';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box>
      <Hero />
    </Box>
    <Bio />
    {/*<Box>
      <List />
    </Box>*/}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
