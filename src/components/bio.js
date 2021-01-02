import React from 'react'
import Box from './box'

import './bio.css'

const Bio = ({header=false}) => <Box header={header?"About David":null}>
  <p><strong>David Sharp</strong> <em>(he/him)</em> is a "code wizard" living in Brighton</p>
  <p>David unconditionally loves JavaScript, and can often be found <a href="https://charanga.com">writing apps in exchange for money</a></p>
  <p>David also pretends to be interested in design, learns Japanese 'for the culture', promises he'll one day make a video game and owns a guitar (and at least one pedal)</p>
  <div style={{width:'100%'}}><img
    style={{
      marginLeft:'calc(50% - 100px)',
      marginRight:'calc(50% - 100px)',
      marginTop:'.3em',
      marginBottom:0,
      border:'solid #333'
    }}
    src="https://s.gravatar.com/avatar/78b4ada96c0948d94c8d6cd573736087?s=200"
  /></div>
</Box>

export default Bio
