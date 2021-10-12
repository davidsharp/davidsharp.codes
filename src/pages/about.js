import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Bio from '../components/bio'
import Box from '../components/box'
import Colour from '../components/colour'
import A from '../components/anchor'
import Kofi from '../components/kofi-widget'

import data from '../../content/about-site.json'

import { differenceInYears } from 'date-fns'

//import {startCase} from 'lodash'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Bio header/>
    <Box header="About this site">
      <p>{`This site was built using ${data['built using']} and is running on ${data['running on']}`}</p>
      <p>{`The typeface is ${data.typeface}`}</p>
      <p>{`The palette uses `}<Colour hex={data.background.toUpperCase()}/>{` for the background`}</p>
    </Box>
    {/* Moving to its own page, point at selected ones here? and link to projects page
    <Box header="Selected Projects">
      <p>A lot of small toy projects can be found on my <A href="https://github.com/davidsharp">GitHub</A> (and a number of small plugins and scripts can be found on my <A href="https://gist.github.com/davidsharp">Gists</A>), mostly these exist to play around with some tech or solve a very small problem for myself. A couple of bigger things that I'm proud of though:</p>
      <ul>
        <li><A href="https://twitter.com/yearinfractions">{`Year in Fractions`}</A>{` Twitter bot inspired by @year_progress, powered by Express, tweets daily how far through the year we are as a (usually approximate) fraction`}</li>
        <li><A href="https://puppetdf.glitch.me">{`PuppetDF`}</A>{`, a hacky proof-of-concept that's turned out to be surprisingly useful. An app that takes a URL and uses Puppeteer (a headless Chromium browser) to output a PDF`}</li>
        <li><A href="https://slice-or-substr.glitch.me">{`slice-or-substr`}</A>{`, a kind of broken toy that demonstrates how slice, substring and substr all work in JavaScript, because I can never remember`}</li>
      </ul>
    </Box>*/}
    <Box header="Experience">
      <p>{/*<strong>2014</strong> - */}{`Received a 2:1 BSc(Hons) Software Engineering from University of Brighton in 2014; mostly Java-focussed, but completed modules that touched on databases, embedded systems, computer graphics and such`}</p>
      <p>{/*<strong>2015-present</strong> - */}{`Currently working at `}<A href="https://charanga.com">{`Charanga`}</A>{`, started in 2015 (>${
        differenceInYears(Date.now(),new Date(2015,1,23))
      } years), building Android, iOS and Desktop apps primarily in JavaScript. Initially using Cordova and AngularJS, but these days using Electron/React and React Native`}</p>
      {/*add link to resume/skills/work project breakdowns/linkedin*/}
    </Box>
    
  </Layout>
)

export default AboutPage
