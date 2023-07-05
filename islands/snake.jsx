import { useEffect, useState, useRef } from "preact/hooks"

import Game from 'https://esm.sh/gh/davidsharp/consnake@1.0.1-emoji/snake.js'
import devtools from 'https://esm.sh/v113/devtools-detect@4.0/index.js'

export default function Snake(){
  const [inited, setInited] = useState(false)

  const gameRef = useRef(new Game())

  useEffect(()=>{
    if(inited){
      const game = gameRef.current
      game.init()
      const keydown = e => game.listen(e.key)
      document.addEventListener('keydown', keydown)
      const interval = setInterval(() => {
        game.tick()
      }, 500);
      return () => {
        clearInterval(interval)
        document.removeEventListener('keydown', keydown)
      }
    }
  },[inited])

  useEffect(()=>{
    const start = event => {if(!inited && event.detail.isOpen) setInited(true)}

    if(devtools.isOpen) setInited(true)
    else {
      globalThis.addEventListener('devtoolschange', start)
      return () => globalThis.removeEventListener('devtoolschange', start)
    }
  },[null])

  return <span></span>
}
