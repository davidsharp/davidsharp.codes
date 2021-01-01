import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Bio from '../components/bio'
import Box from '../components/box'
import Colour from '../components/colour'

import data from '../../content/about-site.json'

import {startCase} from 'lodash'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Bio header/>
    <Box header="About this site">
      <p>{`This site was built using ${data['built using']} and running on ${data['running on']}`}</p>
      <p>{`The typeface is ${data.typeface}`}</p>
      <p>{`The palette uses `}<Colour hex={data.background.toUpperCase()}/>{` for the background`}</p>
    </Box>
    <Box header="Experience"><p>
      <ul>
        <li>2:1 BSc(Hons) Software Engineering from University of Brighton</li>
        <li>{`>`}{
          (new Date().getFullYear())-(new Date("February 23, 2015 00:00:00").getFullYear())-1
        } years at Charanga, building Mobile and Desktop apps using JavaScript in Cordova, Electron and React Native</li>
      </ul>
      </p>
    </Box>
  </Layout>
)

export default SecondPage
