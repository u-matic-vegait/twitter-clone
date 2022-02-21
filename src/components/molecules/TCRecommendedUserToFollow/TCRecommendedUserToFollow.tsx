import { FunctionComponent } from 'react'
import { RecommendedUserToFollow } from '../../../model/RecommendedUserToFollow'
import { TCButton } from '../../atoms/TCButton/TCButton'
import './TCRecommendedUserToFollow.scss'

interface TCRecommendedUserToFollowProps {
  user: RecommendedUserToFollow
}

export const TCRecommendedUserToFollow: FunctionComponent<
  TCRecommendedUserToFollowProps
> = ({ user }) => {
  return (
    <div className='recommendedUserToFollow'>
      <div className='recommendedUserToFollow__imageAndInfo'>
        <img
          className='recommendedUserToFollow__imageAndInfo-image'
          src={user.imageUrl}
          alt='profile_image'
        />
        <div className='recommendedUserToFollow__imageAndInfo-info'>
          <p className='fullName'> {user.fullName} </p>
          <p className='tagName'> {user.tagName} </p>
        </div>
      </div>
      <div className='recommendedUserToFollow__buttonWrapper'>
        <TCButton
          text='Follow'
          backgroundColor='#363636'
          color='white'
          padding='8px 16px'
        />
      </div>
    </div>
  )
}
