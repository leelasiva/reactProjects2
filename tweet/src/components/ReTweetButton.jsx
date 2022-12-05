import React from 'react'
import {FaRetweet} from 'react-icons/fa'

const ReTweetButton = ({count,retweet}) => {
  return (
    <span className='retweet_button'>
   <i><FaRetweet/>{count(retweet)}</i>
   </span>
  )
}

export default ReTweetButton