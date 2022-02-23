import { FunctionComponent } from 'react'
import { Tweet } from '../../../model/Tweet'
import { TCTweet } from '../../molecules/TCTweet/TCTweet'

interface TCTweetsListProps {
  tweets: Tweet[]
}

export const TCTweetsList: FunctionComponent<TCTweetsListProps> = ({
  tweets,
}) => {
  return (
    <>
      {tweets.map((tweet) => (
        <TCTweet tweet={tweet} key={tweet.id} />
      ))}
    </>
  )
}
