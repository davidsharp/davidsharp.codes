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
    <Box header="Experience">
      <p>{/*<strong>2014</strong> - */}Received a 2:1 BSc(Hons) Software Engineering from University of Brighton in 2014; mostly Java-focussed, but completed modules that touched on databases, embedded systems, computer graphics and such</p>
      <p>{/*<strong>2015-present</strong> - */}{`Currently working at `}<A href="https://charanga.com">Charanga</A>{`, started in 2015 (>`}{
        differenceInYears(Date.now(),new Date(2015,1,23))
      }{` years), building Android, iOS and Desktop apps primarily in JavaScript. Initially using Cordova and AngularJS, but these days using Electron/React and React Native`}</p>
    </Box>
    {/*<Kofi name={'davidsharp'} text={'Tip me!'} />*/}
  </Layout>
)

export default AboutPage
