//import "./icon.css"

import { toChildArray } from 'preact'

const Links = props => (<div className="links" style={{textAlign:'center'}}>
  {props.components ? props.components.map((Link,i)=><span>
      {i!=0 && <span aria-hidden="true">{`・`}</span>}
      <Link/>
    </span>
  ):toChildArray(props.children).map((child,i)=><span>
    {i!=0 && <span aria-hidden="true">{`・`}</span>}
    {child}
  </span>)}
</div>)

export default Links