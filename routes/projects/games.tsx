import Layout from "../../src/components/layout.jsx"
import SEO from "../../src/components/seo.jsx"

import Box, { BoxHeader } from '../../src/components/box.jsx'
import A from '../../src/components/anchor.jsx'
import Emoji from '../../src/components/emoji.jsx'
import {GH, Tw, Gl, Itch} from '../../src/components/social-link.jsx'

import Snake from '../../islands/snake.jsx'

const JamDeets = ({name,link,jamName,jamLink,children}) => (
  <>
    <BoxHeader>{`${name} (for ${jamName})`}</BoxHeader>
    {children}
  </>
)

const ProjectsPage = ({route}) => (
  <Layout route={route}>
    <SEO title="Games" />
    <Box header="Game Jams | 2023">
      {/*Split into Itch.io jams and personal jams*/}
      <BoxHeader>Pongaconda (for PongJam)</BoxHeader>
      <p><Itch href="https://davidsharp.itch.io/pongaconda">Pongaconda</Itch>, a rough prototype of a game combining Pong and Snake, built in a few hours for PongJam</p>
      <BoxHeader>Bunslinger at High Noon (for Nokia Jam 5)</BoxHeader>
      <p><Itch href="https://davidsharp.itch.io/bunslinger">Bunslinger at High Noon</Itch>, an arcade-y restaurant sim game in the style of a Nokia 3310 for Nokia Jam 5</p>
      <BoxHeader>Desert Bus Bowling (for Desert Bus for Hope 2023 Game Jam)</BoxHeader>
      <p><Itch href="https://davidsharp.itch.io/desert-bus-bowling">Desert Bus Bowling</Itch>, a simple 3D bowling game built for <Itch href="https://itch.io/jam/2023">Desert Bus for Hope 2023 Game Jam</Itch></p>
      {/*<p>I've casually toyed with making small games here and there (which can also be found on <Itch href="https://davidsharp.itch.io">my Itch.io</Itch>), and here's what has stuck:</p>
      <ul>
        <li><Itch href="https://davidsharp.itch.io/puff-puff-pass-british-bulldog">British Bulldog</Itch>, a game made in collaboration with a few friends with minimal communication, built in the Lua-based framework <A href="https://love2d.org/">LÖVE</A>, most of my work was refactoring, completing features and polishing, but I also added a splash screen inspired by old cracktros</li>
        <li><Itch href="https://davidsharp.itch.io/build-jam">Build-n-Blocks</Itch>, a game made as part of a small "Build" themed game jam in a fortnight, also built in <A href="https://love2d.org/">LÖVE</A>. The game is a 1-bit falling block puzzle game, with a Gameboy RPG-esque overworld</li>
        <li><Itch href="https://davidsharp.itch.io/card-sharpshooter">Card Sharpshooter</Itch>, a Playing Card-themed FPS prototype built in Godot. A collaborative effort, "my" game of 3 we worked on together.</li>
</ul>*/}
    </Box>
  </Layout>
)

export default ProjectsPage
