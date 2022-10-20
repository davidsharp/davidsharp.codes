import React from 'react';
import Helmet from 'react-helmet';

const Snake = () => <Helmet>
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

export default Snake