import React from 'react'

const Colour = ({hex}) => <>
  <a href={`https://www.colorhexa.com/${hex}`}><div style={{
    backgroundColor:'#'+hex,
    height:'.8em',
    width:'.8em',
    border:'solid #333',
    display: 'inline-block'
  }}/>#{hex}</a>
</>

export default Colour