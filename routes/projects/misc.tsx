import Layout from "../../src/components/layout.jsx"
import SEO from "../../src/components/seo.jsx"

import Box from '../../src/components/box.jsx'
import A from '../../src/components/anchor.jsx'
import Emoji from '../../src/components/emoji.jsx'
import {GH, Tw, Gl, Itch} from '../../src/components/social-link.jsx'

import Snake from '../../islands/snake.jsx'

const ProjectsPage = ({route}) => (
  <Layout route={route}>
    <SEO title="Misc" />
    <Box header="Writing">
      <p>I don't have much in the way of writing online, but I did once write a blog post for my Japanese teacher <A href="https://www.stepupjapanese.com/blog/2018/05/gachapon">about gachapon</A> (it is mostly photos though)</p>
    </Box>
  </Layout>
)

export default ProjectsPage
