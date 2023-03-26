import kebabCase from 'https://esm.sh/lodash.kebabcase@4.1.1'

/*
  header in the box, or above the box?
*/

const Box = ({header,children,boxStyle={},style={},className='',...props}) => <>
<section
  id={header?kebabCase(header):undefined}
  className={`box ${className}`}
  style={{
  backgroundColor:'white',
  boxShadow: '5px 5px #333',
  border:'5px solid #333',
  borderRadius: '1em',
  padding: '.8em',
  marginBottom: '8px',
  ...boxStyle
  }}
  {...props}
>
  {header && <BoxHeader>{header}</BoxHeader>}
  <div style={style}>
  {children}
  </div>
</section>
</>

const BoxHeader = ({children}) => <h2 style={{
  marginBottom: '.2em',
  borderBottom: 'solid #333',
  paddingBottom: '.3em'
}}>{children}</h2>

export default Box