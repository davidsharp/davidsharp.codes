import React from 'react'
import styled from 'styled-components'
import Box from './box'
import A from './anchor'

const Bio = ({header=false}) => <Box
header={header?"About David":null}
style={{
  display:'flex',
  flexFlow:'row wrap',
  justifyContent:'space-around',
  alignItems: 'center'
}}>
  <Blurb>
    <P><strong>David Sharp</strong> <Em>(he/him)</Em> is a "code wizard" living in Brighton</P>
    <P>David unconditionally loves JavaScript, and can often be found <A href="https://charanga.com">writing apps in exchange for money</A></P>
    <P>David also pretends to be interested in design, learns Japanese 'for the culture', promises he'll one day make a video game and owns a guitar (and at least one pedal)</P>
  </Blurb>
  <Avatar
    src="https://s.gravatar.com/avatar/78b4ada96c0948d94c8d6cd573736087?s=200"
    alt="David in Kyoto, December 2016"
  />
</Box>

const Avatar = styled.img`
  max-width: 200px;
  max-height: 200px;
  border: solid #333;
  margin: .8em;
  flex: 1 0 200px;
  height: 200px;
  width: 200px;
  backgroundColor: var(--yellow);
`

const Blurb = styled.div`
  min-width: 300px;
  flex: 3 1 0;
`

const P = styled.p`
  font-size: 1.2em;
  margin-bottom: .6em;
`

const Em = styled.em`
  font-style: italic;
`

export default Bio
