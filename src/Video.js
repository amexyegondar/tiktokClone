import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({
url,
channel,
description,
song,
likes,
messages,
shares



}) {
  const[playing,setPlay]=useState(false)
  const videoRef=useRef(null)
  const onVideoPress=()=>{
    if(playing===false){
      videoRef.current.play()
      setPlay(true)
    }
    else{
      videoRef.current.pause();
      setPlay(false)
    }
  

  }
  return (
    <div className='video'>
    <video className='video_player' src={url} loop controls ref={videoRef} onClick={onVideoPress}></video>
  <VideoFooter channel={channel} description={description} song={song}/>
    <VideoSidebar likes={likes} messages={messages} shares={shares}/>
    </div>
  )
}

export default Video