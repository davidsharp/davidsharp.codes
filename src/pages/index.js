import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import List from "../components/list"
import Hero from "../components/home-hero"
import Bio from "../components/bio"
import Box from '../components/box'
import {Tweet} from '../components/tweet'

import '../base.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box>
      <Hero />
    </Box>
    <Bio />
    <Box>
      <Tweet url="https://twitter.com/EliteFreq/status/990219449625186307"/>
    </Box>
    {/*<Box>
      <List />
    </Box>*/}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
