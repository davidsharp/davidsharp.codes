import React from 'react'
import styled from 'styled-components'

// Uses Divider span, so dividing dots aren't part of Link
const Links = props => <Wrapper>
  {props.components ? props.components.map((Link,i)=><Divider>
      <Link/>
    </Divider>
  ):React.Children.map(props.children,(child,i)=><Divider>
    {child}
  </Divider>)}
</Wrapper>

const Divider = styled.span`
  &:not(:first-child)::before{content: "・"}
`

const Wrapper = styled.div`
text-align: center;

& a:link, & a:visited, & a:hover, & a:active {
  color: black;
  text-decoration: none;
}
`

export default Links