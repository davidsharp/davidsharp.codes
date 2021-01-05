import React from 'react'

// helper for external links
const Anchor = ({children,...props}) => <a
  target="_blank"
  rel="noopener"
  {...props}
>
  {children}
</a>

export default Anchor