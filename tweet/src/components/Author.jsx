import React from 'react'

const Author = ({author,time}) => {

  const {name,handle} = author;
  return (
    <span>
    <span className='name'>{name}
    </span>
    <span className='handle'>@{handle}  </span>
    <span className='time'>  {time}</span>
    </span>
  )
}

export default Author