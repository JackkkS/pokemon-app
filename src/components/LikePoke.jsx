import React, { useState} from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
function LinkPoke() {
    
    const [like, setLike] = useState(false);

    const toggleLink = () => {
        setLike((c) => !c)
    }
  return (
   <button onClick={toggleLink}>
        {like ? <FaHeart style={{color:"red"}}/> : <FaRegHeart />}
   </button>
  )
}

export default LinkPoke