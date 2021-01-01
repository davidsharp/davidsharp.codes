import React from 'react'

/*
  header in the box, or above the box?
*/

const Box = ({header,children}) => <>
<section style={{
  backgroundColor:'white',
  boxShadow: '5px 5px #444',
  border:'5px solid #333',
  padding: '.8em',
  marginBottom: '8px'
  }}>
  {header && <BoxHeader>{header}</BoxHeader>}
  {children}
</section>
</>

const BoxHeader = ({children}) => <h2 style={{
  marginBottom: '.8em',
  borderBottom: 'solid'
}}>{children}</h2>

export default Box