import './TCTweet.scss'
import { AiFillMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { HiDotsHorizontal } from 'react-icons/hi'
import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { BsUpload } from 'react-icons/bs'
import { TweetModel } from '../../../model/TweetModel'
import { FunctionComponent } from 'react'

interface TCTweetProps {
  tweet: TweetModel
}

export const TCTweet: FunctionComponent<TCTweetProps> = ({ tweet }) => {
  return (
    <div className='tc-tweet'>
      <div className='tc-tweet__category'>
        <AiFillMessage className='tc-tweet__category__icon' />
        <span className='tc-tweet__category__name'> {tweet.categoryName} </span>
        {` · `}
        <Link to='/home' className='tc-tweet__category__see-more-link'>
          See more
        </Link>
      </div>
      <div className='tc-tweet__data'>
        <div>
          <img
            className='tc-tweet__data__user-profile-image'
            src={tweet.userProfileImageUrl}
            alt='user_profile_image'
          />
        </div>
        <div className='tc-tweet__data__user-data-and-tweet-text'>
          <div className='tc-tweet__data__user-data'>
            <div>
              <span className='tc-tweet__data__user-data__name'>
                {tweet.userFullName}
              </span>
              <span className='tc-tweet__data__user-data__username'>
                {tweet.userUsername} ·
              </span>
              <span className='tc-tweet__data__user-data__time'>
                {' '}
                {tweet.time}h
              </span>
            </div>
            <div>
              <HiDotsHorizontal className='tc-tweet__data-user-data__options-icon' />
            </div>
          </div>
          <div className='tc-tweet__data__user-data-and-tweet-text__tweet-text'>
            <p>{tweet.content}</p>
          </div>
        </div>
      </div>
      <div className='tc-tweet__bottom-icons'>
        <div className='tc-tweet__bottom-icons__icon-wrapper tc-tweet__bottom-icons__icon-and-num-reply'>
          <BiMessageRounded className='tc-tweet__bottom-icons__icon-and-num-reply__reply-icon' />
          <span className='tc-tweet__bottom-icons__icon-wrapper__number'>
            {tweet.replyNumber}
          </span>
        </div>
        <div className='tc-tweet__bottom-icons__icon-wrapper tc-tweet__bottom-icons__icon-and-num-retweet'>
          <AiOutlineRetweet className='tc-tweet__bottom-icons__icon-and-num-reply__retweet-icon' />
          <span className='tc-tweet__bottom-icons__icon-wrapper__number'>
            {tweet.retweetNumber}
          </span>
        </div>
        <div className='tc-tweet__bottom-icons__icon-wrapper tc-tweet__bottom-icons__icon-and-num-like'>
          <AiOutlineHeart className='tc-tweet__bottom-icons__icon-and-num-reply__like-icon' />
          <span className='tc-tweet__bottom-icons__icon-wrapper__number'>
            {tweet.likeNumber}
          </span>
        </div>
        <div className='tc-tweet__bottom-icons__icon-wrapper-share'>
          <BsUpload className='tc-tweet__bottom-icons__icon-and-num-reply__share-icon' />
        </div>
      </div>
    </div>
  )
}
