import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from '../components/box'
import Helmet from "react-helmet"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Helmet>
      <script type="module">
        {`
        import Game from 'https://cdn.jsdelivr.net/gh/davidsharp/consnake/snake.js'
        import devtools from 'https://cdn.jsdelivr.net/npm/devtools-detect@4.0/index.js'

        let inited = false

        const start = () => {
          inited = true
          const game = new Game()
          game.init()
          document.addEventListener('keydown', e => game.listen(e.key))
          setInterval(() => {
            game.tick()
          }, 300);
        }

        const init = () => {
          if(devtools.isOpen) start();
          else window.addEventListener('devtoolschange', event => {
            if(!inited && event.detail.isOpen) start()
          })
        }
        
        init()
        `}
      </script>
    </Helmet>
    <Box header="Not Found">
      <p>{`The page you tried to navigate to doesn't seem to exist 😱`}</p>
    </Box>
  </Layout>
)

export default NotFoundPage
