import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import List from "../components/list"
import Hero from "../components/home-hero"
import NavRow from '../components/nav-row'
import Bio from "../components/bio"
import Box from '../components/box'
import {TweetBox} from '../components/tweet'

import { Tweet } from 'react-twitter-widgets'

import '../base.css'

const IndexPage = () => (
  <Layout home>
    <SEO title="Home" />
    <NavRow />
    <Bio />
  </Layout>
)

export default IndexPage
