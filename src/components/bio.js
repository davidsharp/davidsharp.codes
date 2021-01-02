import React from 'react'
import Box from './box'

import './bio.css'

const Bio = ({header=false}) => <Box
header={header?"About David":null}
style={{
  display:'flex',
  flexFlow:'row wrap',
  justifyContent:'space-around',
  alignItems: 'center'
}}>
  <div style={{
    minWidth:'300px',
    flex:'3 1 0'
  }}>
  <p><strong>David Sharp</strong> <em>(he/him)</em> is a "code wizard" living in Brighton</p>
  <p>David unconditionally loves JavaScript, and can often be found <a href="https://charanga.com">writing apps in exchange for money</a></p>
  <p>David also pretends to be interested in design, learns Japanese 'for the culture', promises he'll one day make a video game and owns a guitar (and at least one pedal)</p>
  </div>
  <img
    style={{
      maxWidth:200,
      maxHeight:200,
      border:'solid #333',
      margin: '.8em',
      flex: '1 0 200px',
      height: 200,
      width: 200
    }}
    src="https://s.gravatar.com/avatar/78b4ada96c0948d94c8d6cd573736087?s=200"
    alt="David in Kyoto, December 2016"
  />
</Box>

export default Bio
