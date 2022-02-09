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
        <li><A href="https://glitch.com/~christmas-eve-eve">{`Christmas Eve Eve`}</A>{`, a very dumb single-page thing based on an old XKCD`}</li>
      </ul>
      <hr/>
      <p>Here's some <GH href="https://github.com/matryer/xbar">bitbar/xbar</GH> plugins for macOS (all GitHub gists):</p>
      <ul>
        <li><A href="https://gist.github.com/davidsharp/b57d34dba2124bc8d440a60699b82a4a">{`Weather`}</A>{`, a weather plugin that uses `}<A href="https://wttr.in">{`wttr.in`}</A></li>
        <li><A href="https://gist.github.com/davidsharp/767f69c090c7381af70ff50325f56bca">{`Spotify`}</A>{`, a plugin that displays the currently playing song, with some shortcuts and controls`}</li>
        <li><A href="https://gist.github.com/davidsharp/707417fdc85b3128f91bb075fb17fbcc">{`Shuffle Spotify`}</A>{`, a plugin that adds a shuffle/unshuffle button to the menu bar`}</li>
        <li><A href="https://gist.github.com/davidsharp/e0bfa84a657ef113b3d59f24767b8314">{`COVID Stats`}</A>{`, a plugin that uses `}<A href="https://diseases.sh">{`diseases.sh`}</A>{` to get the country's COVID stats`}</li>
        <li><A href="https://gist.github.com/davidsharp/209485fbb7c4d6cbbb362c6139e38f66">{`Toggle Mono/Stereo audio`}</A>{` (may no longer work), a plugin that adds a button to toggle accessibility options for mono/stereo audio`}</li>
        <li><A href="https://gist.github.com/davidsharp/164c69bbe60925122c727f526eaeab89">{`Clipboard Spy`}</A>{`, a plugin that shows what's on your clipboard, with an option to clear it`}</li>
      </ul>
    </Box>
  </Layout>
)

export default ProjectsPage
