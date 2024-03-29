import Box from './box.jsx'
import A from './anchor.jsx'

//import './bio.css'

const Bio = ({header=false}) => <Box
header={header?"About David":null}
style={{
  display:'flex',
  flexFlow:'row wrap',
  justifyContent:'space-around',
  alignItems: 'center'
}}>
  <div style={{
    minWidth:'300px',
    flex:'3 1 0'
  }}>
  <p><strong>David Sharp</strong> <em>(he/him)</em> is a JavaScript developer living in Brighton</p>
  <p>David can currently be found working at <A href="https://charanga.com"> Charanga</A>, building mobile, tablet and desktop apps, using technologies such as Electron and React Native</p>
  <p>David also pretends to be interested in design, learns Japanese 'for the culture', promises he'll one day make a video game and owns a guitar (and at least one pedal)</p>
  </div>
  <figure>
  <img
    style={{
      maxWidth:200,
      maxHeight:200,
      border:'solid #333',
      margin: '.8em',
      flex: '1 0 200px',
      height: 200,
      width: 200,
      backgroundColor: '#fedf00'
    }}
    src="https://s.gravatar.com/avatar/78b4ada96c0948d94c8d6cd573736087?s=200"
    alt="David in Kyoto, Japan - December 2016"
  />
  <figcaption>David in Kyoto, Japan - December 2016</figcaption>
  </figure>
</Box>

export default Bio
