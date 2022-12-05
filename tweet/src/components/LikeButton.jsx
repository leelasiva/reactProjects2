import React from 'react'
import {FaHeart} from 'react-icons/fa'

const LikeButton = ({count,likes}) => {
  return (
    <span className='like_button'>
    <i><FaHeart/>{count(likes)}</i>
    </span>
  )
}

export default LikeButton