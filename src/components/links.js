import React from 'react'

import "./icon.css"

const Links = props => <div className="links" style={{textAlign:'center'}}>
  {props.components ? props.components.map((Link,i)=><>
      {i!=0 && <span aria-hidden="true">{`・`}</span>}
      <Link/>
    </>
  ):React.Children.map(props.children,(child,i)=><>
    {i!=0 && <span aria-hidden="true">{`・`}</span>}
    {child}
  </>)}
</div>

export default Links