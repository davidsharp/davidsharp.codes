import React from 'react'
import A from './anchor'
import styled from 'styled-components'

const Sample = styled.div`
  background-color: ${({hex})=>`#${hex}`};
  height: .8em;
  width: .8em;
  border: solid #333;
  display: inline-block;
  margin-right: .1em;
`

const Colour = ({hex}) => <>
  <A href={`https://www.colorhexa.com/${hex}`}><Sample hex={hex}/>#{hex.toUpperCase()}</A>
</>

export default Colour