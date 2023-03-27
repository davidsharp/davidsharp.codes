import Layout from "../src/components/layout.jsx"
import SEO from "../src/components/seo.jsx"
import NavRow from '../src/components/nav-row.jsx'
import Bio from "../src/components/bio.jsx"

const IndexPage = ({route}) => (
  <Layout home route={route}>
    <SEO title="Home" />
    <NavRow route={route}/>
    <Bio />
  </Layout>
)

export default IndexPage
