import React, {useState, useEffect} from 'react';

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
  return (tweet?<div dangerouslySetInnerHTML={{__html:tweet.html}}/>: <p>loading</p>)
}

export { Tweet }