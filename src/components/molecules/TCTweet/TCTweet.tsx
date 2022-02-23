import './TCTweet.scss'
import { AiFillMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { HiDotsHorizontal } from 'react-icons/hi'
import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { BsUpload } from 'react-icons/bs'
import { Tweet } from '../../../model/Tweet'
import { FunctionComponent } from 'react'

interface TCTweetProps {
  tweet: Tweet
}

export const TCTweet: FunctionComponent<TCTweetProps> = ({ tweet }) => {
  return (
    <div className='tweet'>
      <div className='tweet__category'>
        <AiFillMessage className='tweet__category-icon' />
        <span className='tweet__category-name'> {tweet.categoryName} </span>
        {` · `}
        <Link to='/home' className='tweet__category-seeMoreLink'>
          See more
        </Link>
      </div>
      <div className='tweet__data'>
        <div>
          <img
            className='tweet__data-user_profile_image'
            src={tweet.userProfileImageUrl}
            alt='user_profile_image'
          />
        </div>
        <div className='tweet__data-userDataAndText'>
          <div className='tweet__data-userData'>
            <div>
              <span className='tweet__data-userData-name'>
                {tweet.userFullName}
              </span>
              <span className='tweet__data-userData-username'>
                {tweet.userUsername} ·
              </span>
              <span className='tweet__data-userData-time'> {tweet.time}h </span>
            </div>
            <div>
              <HiDotsHorizontal className='tweet__data-userData-optionsIcon' />
            </div>
          </div>
          <div className='tweet__data-text'>
            <p>{tweet.content}</p>
          </div>
        </div>
      </div>
      <div className='tweet_bottomIcons'>
        <div className='tweet_bottomIconWrapper iconAndNum-BiMessageRounded'>
          <BiMessageRounded className='tweet_bottomIcons-BiMessageRounded' />
          <span className='tweet_bottomIcons-number'>{tweet.replyNumber}</span>
        </div>
        <div className='tweet_bottomIconWrapper iconAndNum-AiOutlineRetweet'>
          <AiOutlineRetweet className='tweet_bottomIcons-AiOutlineRetweet' />
          <span className='tweet_bottomIcons-number'>
            {tweet.retweetNumber}
          </span>
        </div>
        <div className='tweet_bottomIconWrapper iconAndNum-AiOutlineHeart'>
          <AiOutlineHeart className='tweet_bottomIcons-AiOutlineHeart' />
          <span className='tweet_bottomIcons-number'> {tweet.likeNumber} </span>
        </div>
        <div className='tweet_bottomIconWrapper'>
          <BsUpload className='tweet_bottomIcons-BsUpload' />
        </div>
      </div>
    </div>
  )
}
