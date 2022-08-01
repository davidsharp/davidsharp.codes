import React from 'react'
import styled from 'styled-components'

const Links = props => <Wrapper>
  {props.components ? props.components.map((Link,i)=><>
      {i!=0 && `・`}
      <Link/>
    </>
  ):React.Children.map(props.children,(child,i)=><>
    {i!=0 && `・`}
    {child}
  </>)}
</Wrapper>

// Can I override the <Link> components themselves?
//  Consider moving the logic elsewhere?
const Wrapper = styled.div`
text-align: center;

& a:link, & a:visited, & a:hover, & a:active {
  color: black;
  text-decoration: none;
}
`

export default Links