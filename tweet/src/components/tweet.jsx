import React from 'react'
import Author from './Author'
import Avatar from './Avatar'
import LikeButton from './LikeButton'
import Message from './Message'
import MoreOptions from './MoreOptions'
import ReplyButton from './ReplyButton'
import ReTweetButton from './ReTweetButton'
import PropTypes from 'prop-types';

const tweet = ({tweet,count}) => {
//console.log(tweet)
//const {} = count;
Author.propTypes = {
  author:{
  name:PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired
},
  time:PropTypes.string
}
  
  return (
    <div className='tweet' >
    <Avatar tweet={tweet.gravatar}/>
    <div className='content'>
     <Author author={tweet.author} time={tweet.timestamp}/>
    <div className='message'><Message msg={tweet.message}/></div>
    
    <div className='buttons'>
    <ReplyButton />
    <LikeButton count={count} likes={tweet.likes}/>
    
    <ReTweetButton count={count} retweet={tweet.retweets}/>
    <MoreOptions/>
    </div>
    </div>
    </div>
  )
}

export default tweet