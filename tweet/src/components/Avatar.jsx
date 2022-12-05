import React from 'react'

const Avatar = ({tweet}) => {

   const url = `${tweet}`
   //console.log(url);
  return (
    <img
    src={url}
    className='avatar'
    alt="avatar"
    />
  )
}

export default Avatar