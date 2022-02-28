import { FunctionComponent } from 'react'
import { RecommendedUserToFollowModel } from '../../../model/RecommendedUserToFollowModel'
import {
  TCButton,
  TCButtonSize,
  TCButtonType,
} from '../../atoms/TCButton/TCButton'
import './TCRecommendedUserToFollow.scss'

interface TCRecommendedUserToFollowProps {
  user: RecommendedUserToFollowModel
}

export const TCRecommendedUserToFollow: FunctionComponent<
  TCRecommendedUserToFollowProps
> = ({ user }) => {
  return (
    <div className='tc-recommended-user-to-follow'>
      <div className='tc-recommended-user-to-follow__content'>
        <div className='tc-recommended-user-to-follow__content__avatar'>
          <img
            className='tc-recommended-user-to-follow__content__avatar__image'
            src={user.imageUrl}
            alt='profile_image'
          />
        </div>

        <div className='tc-recommended-user-to-follow__content__info'>
          <p className='tc-recommended-user-to-follow__content__info__name'>
            {user.fullName}
          </p>
          <p className='tc-recommended-user-to-follow__content__info__tag'>
            {user.tagName}
          </p>
        </div>
      </div>
      <div className='tc-recommended-user-to-follow__options'>
        <TCButton
          text='Follow'
          type={TCButtonType.SECONDARY}
          size={TCButtonSize.SM}
        />
      </div>
    </div>
  )
}
