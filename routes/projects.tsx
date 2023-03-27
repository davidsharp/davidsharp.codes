import Layout from "../src/components/layout.jsx"
import SEO from "../src/components/seo.jsx"

import Box from '../src/components/box.jsx'
import A from '../src/components/anchor.jsx'
import Emoji from '../src/components/emoji.jsx'
import {GH, Tw, Gl, Itch} from '../src/components/social-link.jsx'

//import Snake from '../src/components/snake.jsx'

const Snake = null

const ProjectsPage = ({route}) => (
  <Layout route={route}>
    <SEO title="Projects" />
    {/* todo - don't just dump Snake here*/}
    <Snake/>
    {/* todo - section picker*/}
    <Box header="Personal Projects">
      <p>A lot of small toy projects can be found on my <A href="https://github.com/davidsharp">GitHub</A> and <A href="https://glitch.com/@davidsharp">Glitch</A> (and a number of small plugins and scripts can be found on my <A href="https://gists.github.com/davidsharp">Gists</A>), mostly these exist to play around with some tech or solve a very small problem for myself. Here's an assortment of things that I'm proud of though:</p>
      <ul>
        <li><Tw href="https://twitter.com/yearinfractions">{`Year in Fractions`}</Tw>{`, a Twitter bot inspired by `}<Tw href="https://twitter.com/year_progress">{`@year_progress`}</Tw>{`, powered by Express, tweets daily how far through the year we are as a (usually approximate) fraction [semi-retired, uses an old version of the Twitter API and only occasionally springs into life]`}</li>
        <li><GH href="https://github.com/davidsharp/davidsharp.codes">{`This very site`}</GH>{`, a Fresh site running on Deno Deploy, ported from Gatsby`}</li>
        <li><GH href="https://github.com/davidsharp/wizzbo">{`Wizzbo`}</GH>{`, a Discord bot that acts as a playground for me to try out ideas, but with the functionality to deploy subsets of commands as their own sub-bots`}</li>
        <li><GH href="https://github.com/davidsharp/consnake">{`Consnake`}</GH>{`, Snake, but playable in the devtools (opening devtools here will start the game `}<Emoji emoji="👀"/>{`)`}</li>
        <li><Gl href="https://glitch.com/~christmas-eve-eve">{`Christmas Eve Eve`}</Gl>{`, a very dumb single-page thing based on an old XKCD`}</li>
        <li><A href="https://puppetdf.glitch.me">{`PuppetDF`}</A>{`, what started as a hacky proof-of-concept that turned out to be surprisingly useful. An app that takes a URL and uses Puppeteer (a headless Chromium browser) to output a PDF`}</li>
        <li><A href="https://slice-or-substr.glitch.me">{`slice-or-substr`}</A>{`, a kind of broken toy that demonstrates how slice, substring and substr all work in JavaScript, because I can never remember`}</li>
        <li><Gl href="https://glitch.com/~doushi-flash">{`Doushi Flash`}</Gl>{`, a Japanese verb flashcard generator. Generates an image with a random Japanese verb, its translation and a couple of conjugations`}</li>
      </ul>
    </Box>
    <Box header="Games">
      <p>I've casually toyed with making small games here and there (which can also be found on <Itch href="https://davidsharp.itch.io">my Itch.io</Itch>), and here's what has stuck:</p>
      <ul>
        <li><Itch href="https://davidsharp.itch.io/puff-puff-pass-british-bulldog">British Bulldog</Itch>, a game made in collaboration with a few friends with minimal communication, built in the Lua-based framework <A href="https://love2d.org/">LÖVE</A>, most of my work was refactoring, completing features and polishing, but I also added a splash screen inspired by old cracktros</li>
        <li><Itch href="https://davidsharp.itch.io/build-jam">Build-n-Blocks</Itch>, a game made as part of a small "Build" themed game jam in a fortnight, also built in <A href="https://love2d.org/">LÖVE</A>. The game is a 1-bit falling block puzzle game, with a Gameboy RPG-esque overworld</li>
        <li><Itch href="https://davidsharp.itch.io/card-sharpshooter">Card Sharpshooter</Itch>, a Playing Card-themed FPS prototype built in Godot. A collaborative effort, "my" game of 3 we worked on together.</li>
      </ul>
      <p>I've also started entering a few small game jams, to experiment with prototypes and build the habit of finishing small projects:</p>
      <ul>
        <li><Itch href="https://davidsharp.itch.io/pongaconda">Pongaconda</Itch>, a rough prototype of a game combining Pong and Snake, built in a few hours for PongJam</li>
        <li><Itch href="https://davidsharp.itch.io/bunslinger">Bunslinger at High Noon</Itch>, an arcade-y restaurant sim game in the style of a Nokia 3310 for Nokia Jam 5</li>
      </ul>
    </Box>
    <Box header="Other coding miscellany">
      <p>I've participated in <A href="https://adventofcode.com">Advent of Code</A> for a number of years (but have yet to <em>fully</em> complete a year), usually in terse JavaScript, and keep my code here: <GH href="https://github.com/davidsharp/advent-of-code">davidsharp/advent-of-code</GH></p>
      <hr/>
      <p>Here's some <GH href="https://github.com/matryer/xbar">bitbar/xbar</GH> plugins for macOS (all GitHub gists):</p>
      <ul>
        <li><A href="https://gist.github.com/davidsharp/b57d34dba2124bc8d440a60699b82a4a">{`Weather`}</A>{`, a weather plugin that uses `}<A href="https://wttr.in">{`wttr.in`}</A></li>
        <li><A href="https://gist.github.com/davidsharp/767f69c090c7381af70ff50325f56bca">{`Spotify`}</A>{`, a plugin that displays the currently playing song, with some shortcuts and controls`}</li>
        <li><A href="https://gist.github.com/davidsharp/707417fdc85b3128f91bb075fb17fbcc">{`Shuffle Spotify`}</A>{`, a plugin that adds a shuffle/unshuffle button to the menu bar`}</li>
        <li><A href="https://gist.github.com/davidsharp/e0bfa84a657ef113b3d59f24767b8314">{`COVID Stats`}</A>{`, a plugin that uses `}<A href="https://diseases.sh">{`diseases.sh`}</A>{` to get the country's COVID stats`}</li>
        <li><A href="https://gist.github.com/davidsharp/209485fbb7c4d6cbbb362c6139e38f66">{`Toggle Mono/Stereo audio`}</A>{` (may no longer work), a plugin that adds a button to toggle accessibility options for mono/stereo audio`}</li>
        <li><A href="https://gist.github.com/davidsharp/164c69bbe60925122c727f526eaeab89">{`Clipboard Spy`}</A>{`, a plugin that shows what's on your clipboard, with an option to clear it`}</li>
      </ul>
    </Box>
  </Layout>
)

export default ProjectsPage
