import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Box from '../components/box'
import A from '../components/anchor'
import {GH, Tw} from '../components/social-link'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    {/* todo - add actual projects */}
    <Box header="Personal Projects">
      <p>A lot of small toy projects can be found on my <A href="https://github.com/davidsharp">GitHub</A> and <A href="https://glitch.com/@davidsharp">Glitch</A> (and a number of small plugins and scripts can be found on my <A href="https://gists.github.com/davidsharp">Gists</A>), mostly these exist to play around with some tech or solve a very small problem for myself. A couple of bigger things that I'm proud of though:</p>
      <ul>
        <li><Tw href="https://twitter.com/yearinfractions">{`Year in Fractions`}</Tw>{`, a Twitter bot inspired by `}<Tw href="https://twitter.com/year_progress">{`@year_progress`}</Tw>{`, powered by Express, tweets daily how far through the year we are as a (usually approximate) fraction`}</li>
        <li><A href="https://puppetdf.glitch.me">{`PuppetDF`}</A>{`, what started as a hacky proof-of-concept that turned out to be surprisingly useful. An app that takes a URL and uses Puppeteer (a headless Chromium browser) to output a PDF`}</li>
        <li><A href="https://slice-or-substr.glitch.me">{`slice-or-substr`}</A>{`, a kind of broken toy that demonstrates how slice, substring and substr all work in JavaScript, because I can never remember`}</li>
        <li><GH href="https://github.com/davidsharp/wizzbo">{`Wizzbo`}</GH>{`, a Discord bot that acts as a playground for me to try out ideas, but with the functionality to deploy subsets of commands as their own sub-bots`}</li>
        <li><GH href="https://github.com/davidsharp/davidsharp.codes">{`This very site`}</GH>{`, a Gatsby site running on Netlify`}</li>
      </ul>
    </Box>
  </Layout>
)

export default ProjectsPage
