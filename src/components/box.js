import React from 'react'

const Box = ({children}) => <section style={{
  backgroundColor:'white',
  boxShadow: '5px 5px #444',
  border:'5px solid #333',
  padding: '.8em',
  marginBottom: '8px'
  }}>
  {children}
</section>

export default Box