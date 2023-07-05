// helper for external links
const Anchor = ({title,children,ariaHidden=false,...props}) => <a
  className="anchor"
  target="_blank"
  rel="noopener"
  aria-label={title}
  title={title}
  {...props}
>
  <span aria-hidden={ariaHidden}>
    {children}
  </span>
</a>

export default Anchor