import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Box from '../components/box'
import A from '../components/anchor'
import {GH, Tw} from '../components/social-link'

const DesignPage = () => (
  <Layout>
    <SEO title="Design" />
    <Box header="Design">
      <p>Having a dedicated design page feels a bit grandiose for having made a few things for friends, but I'm proud of them, so I may as well show them off</p>
      <ul>
        <li>Late 2021 - STEP UP shiyou! mug - a mug I designed as a gift for friend (and Japanese teacher) Fran "Step Up Japanese" Wrigley</li>
        <li>Early 2022 -  KWK pin badge - a badge I designed for a(n occasionally) fortnightly writing club with friends, the punky aesthetic is deliberately at odds with the friendly nerd atmosphere</li>
      </ul>
    </Box>
  </Layout>
)

export default DesignPage
