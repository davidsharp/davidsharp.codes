import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  text-decoration-style: wavy;
  text-decoration-line: underline;
  text-decoration-color: var(--yellow);

  &:hover {
    color: tomato;
    text-decoration-color: var(--yellow);
  }
`

// helper for external links
const Anchor = ({title,children,ariaHidden=false,...props}) => <A
  target="_blank"
  rel="noopener"
  aria-label={title}
  title={title}
  {...props}
>
  <span aria-hidden={ariaHidden}>
    {children}
  </span>
</A>

export default Anchor