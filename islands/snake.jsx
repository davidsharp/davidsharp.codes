import { useEffect, useRef, useState } from "preact/hooks";

import Game from "../vendor/snake.js";
import devtools from "devtools-detect";

export default function Snake() {
  const [inited, setInited] = useState(false);

  const gameRef = useRef(new Game());

  useEffect(() => {
    if (inited) {
      const game = gameRef.current;
      game.init();
      const keydown = (e) => game.listen(e.key);
      document.addEventListener("keydown", keydown);
      const interval = setInterval(() => {
        game.tick();
      }, 500);
      return () => {
        clearInterval(interval);
        document.removeEventListener("keydown", keydown);
      };
    }
  }, [inited]);

  useEffect(() => {
    const start = (event) => {
      if (!inited && event.detail.isOpen) setInited(true);
    };

    if (devtools.isOpen) setInited(true);
    else {
      globalThis.addEventListener("devtoolschange", start);
      return () => globalThis.removeEventListener("devtoolschange", start);
    }
  }, [null]);

  return <span></span>;
}
