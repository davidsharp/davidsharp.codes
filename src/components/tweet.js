import React, {useState, useEffect} from 'react';

import Box from './box'

import {
  SiTwitter as Twitter,
} from 'react-icons/si'

// client-side, TODO, fetch tweets on build

const API = 'https://cors-anywhere.herokuapp.com/https://publish.twitter.com/oembed?url='

const Tweet = ({url}) => {
  const [tweet, setTweet] = useState(null)
  useEffect(() => {
    fetch(API+url)
      .then(response => response.json())
      .then(data => {
        setTweet(data)
      })
  }, [])
  return (
    tweet?<>
      <div dangerouslySetInnerHTML={{__html:tweet.html}}/>
      {/*<pre>{JSON.stringify(tweet,null,2)}</pre>*/}
      </>
      :<p>loading</p>
    )
}

const TweetBox = ({children}) =>  <Box header={<Twitter/>}>{children}</Box>

export { Tweet, TweetBox }