import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from '../components/box'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box header="Not Found">
      <p>{`The page you tried to navigate to doesn't seem to exist 😱`}</p>
    </Box>
  </Layout>
)

export default NotFoundPage
