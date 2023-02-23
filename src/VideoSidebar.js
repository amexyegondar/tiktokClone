import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message'
import ShareIcon from '@mui/icons-material/Share'

function VideoSidebar({likes,shares,messages}) {
  const[liked,setLiked]=useState(false)
  return (
    <div className='videoSidebar'>
    <div className="videoSidebr_button">
    
      {liked ? 

      <FavoriteIcon  onClick={e=> setLiked(false)}/>
      
      :
        <FavoriteBorderIcon onClick={e=> setLiked(true)}/>
      }
    
    <p>{liked?likes+1:likes}</p>
    </div>
    <div className="videoSidebr_button">
    <MessageIcon/>
    <p>{messages}</p>
    </div>
    <div className="videoSidebr_button">
    <ShareIcon/>
    <p>{shares}</p>
    </div>

    
   
    </div>
  )
}

export default VideoSidebar