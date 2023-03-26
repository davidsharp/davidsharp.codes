import A from './anchor.jsx'

const Colour = ({hex}) => <A href={`https://www.colorhexa.com/${hex}`}><span style={{
    backgroundColor:'#'+hex,
    height:'.8em',
    width:'.8em',
    border:'solid #333',
    display: 'inline-block'
  }}/>{`#${hex.toUpperCase()}`}
</A>

export default Colour