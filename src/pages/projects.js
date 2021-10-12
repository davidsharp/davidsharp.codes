import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Box from '../components/box'
import A from '../components/anchor'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    {/* todo - add actual projects */}
    <Box header="Personal Projects">
      <p>A lot of small toy projects can be found on my <A href="https://github.com/davidsharp">GitHub</A> and <A href="https://glitch.com/@davidsharp">Glitch</A>(and a number of small plugins and scripts can be found on my <A href="https://gists.github.com/davidsharp">Gists</A>), mostly these exist to play around with some tech or solve a very small problem for myself. A couple of bigger things that I'm proud of though:</p>
      <ul>
        <li><A href="https://twitter.com/yearinfractions">{`Year in Fractions`}</A>{` Twitter bot inspired by @year_progress, powered by Express, tweets daily how far through the year we are as a (usually approximate) fraction`}</li>
        <li><A href="https://puppetdf.glitch.me">{`PuppetDF`}</A>{`, a hacky proof-of-concept that's turned out to be surprisingly useful. An app that takes a URL and uses Puppeteer (a headless Chromium browser) to output a PDF`}</li>
        <li><A href="https://slice-or-substr.glitch.me">{`slice-or-substr`}</A>{`, a kind of broken toy that demonstrates how slice, substring and substr all work in JavaScript, because I can never remember`}</li>
      </ul>
    </Box>
  </Layout>
)

export default ProjectsPage
