import React from 'react'
import styled from 'styled-components'

// Uses Divider span, so dividing dots aren't part of Link
const Links = props => <Wrapper>
  {props.components ? props.components.map((Link,i)=><>
      {i!=0 && <Divider/>}
      <Link/>
    </>
  ):React.Children.map(props.children,(child,i)=><>
    {i!=0 && <Divider/>}
    {child}
  </>)}
</Wrapper>

const Divider = styled(props => <span aria-hidden="true" {...props}>{`・`}</span>)`
  /*&:not(:first-child)::before{content: "・"}*/
`

const Wrapper = styled.div`
text-align: center;

& a:link, & a:visited {
  color: black;
  text-decoration: none;
}

& a:hover, & a:active {
  color: tomato;
  text-decoration: none;
}
`

export default Links