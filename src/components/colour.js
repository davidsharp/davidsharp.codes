import React from 'react'
import A from './anchor'

const Colour = ({hex}) => <>
  <A href={`https://www.colorhexa.com/${hex}`}><div style={{
    backgroundColor:'#'+hex,
    height:'.8em',
    width:'.8em',
    border:'solid #333',
    display: 'inline-block'
  }}/>#{hex.toUpperCase()}</A>
</>

export default Colour