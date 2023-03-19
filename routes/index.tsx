import Layout from "../src/components/layout.jsx"
import SEO from "../src/components/seo.jsx"
import NavRow from '../src/components/nav-row.jsx'
import Bio from "../src/components/bio.jsx"

//import '../base.css'

const IndexPage = () => (
  <Layout home>
    <SEO title="Home" />
    <NavRow />
    <Bio />
  </Layout>
)

export default IndexPage
