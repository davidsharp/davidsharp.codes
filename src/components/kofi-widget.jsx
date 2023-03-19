// todo, move to islands

import React, {useEffect} from 'react';
export default function Kofi({name='davidsharp',text='Tip Me',backgroundColor='#fcbf47',textColor='#323842'}){
  const widgetScript = (`console.log('Donate @ ko-fi.com/${name}')
  kofiWidgetOverlay.draw('${name}', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': '${text}',
    'floating-chat.donateButton.background-color': '${backgroundColor}',
    'floating-chat.donateButton.text-color': '${textColor}'
  });`)

  useEffect(()=>fetch('https://storage.ko-fi.com/cdn/scripts/overlay-widget.js').then(response=>response.text()).then(script=>{
    (new Function(`${script};${widgetScript}`))()
  }))

  return null
}