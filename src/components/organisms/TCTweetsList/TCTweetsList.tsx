import { FunctionComponent } from 'react'
import { TweetModel } from '../../../model/TweetModel'
import { TCTweet } from '../../molecules/TCTweet/TCTweet'

interface TCTweetsListProps {
  tweets: TweetModel[]
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
