//A simple TWEET App

import Tweet from './components/tweet';

function App() {

  const testTweet = {
    message: "Something about cats.",
    gravatar: "https://www.gravatar.com/avatar/nothing",
    author: {
    handle: "catperson",
    name: "leela"
    },
    likes: 2,
    retweets: 10,
    timestamp: "2016-07-30 21:24:37"
    };

    const getReTweet = (count) =>{
        if(count > 0){
          return(
            <span className='retweet'>
             {count}
            </span>
          )
        }else{
          return null;
        }
    };

  return (
    <div>
     <Tweet tweet={testTweet} count = {getReTweet}/>
    </div>
  );
}

export default App;
