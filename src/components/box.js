import React from 'react'

import {kebabCase} from 'lodash'

/*
  header in the box, or above the box?
*/

const Box = ({header,children,boxStyle={},style={},className='',...props}) => <>
<section
  id={header?kebabCase(header):undefined}
  className={`box ${className}`}
  style={{
  backgroundColor:'white',
  boxShadow: '5px 5px #444',
  border:'5px solid #333',
  padding: '.8em',
  marginBottom: '8px',
  ...boxStyle
  }}
  {...props}
>
  {header && <BoxHeader>{header}</BoxHeader>}
  <div style={style}>
  {children}
  </div>
</section>
</>

const BoxHeader = ({children}) => <h2 style={{
  marginBottom: '.8em',
  borderBottom: 'solid #333'
}}>{children}</h2>

export default Box