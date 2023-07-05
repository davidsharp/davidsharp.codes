import Layout from "../src/components/layout.jsx"
import SEO from "../src/components/seo.jsx"
import Box from '../src/components/box.jsx'
import Snake from '../islands/snake.jsx'

import { UnknownPageProps } from "$fresh/server.ts";



const NotFoundPage = ({ url }: UnknownPageProps) => (
  <Layout>
    <SEO title="404: Not found" />
    <Snake/>
    <Box header="Not Found">
      <p>{`The page you tried to navigate to (${url.pathname}) doesn't seem to exist 😱`}</p>
    </Box>
  </Layout>
)

export default NotFoundPage


