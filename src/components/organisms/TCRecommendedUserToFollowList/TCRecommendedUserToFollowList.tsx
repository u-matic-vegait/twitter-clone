import { FunctionComponent } from 'react'
import { RecommendedUserToFollowModel } from '../../../model/RecommendedUserToFollowModel'
import { TCRecommendedUserToFollow } from '../../molecules/TCRecommendedUserToFollow/TCRecommendedUserToFollow'
import './TCRecommendedUsersToFollowList.scss'

interface TCRecommendedUsersToFollowlistProps {
  users: RecommendedUserToFollowModel[]
}

export const TCRecommendedUsersToFollowlist: FunctionComponent<
  TCRecommendedUsersToFollowlistProps
> = ({ users }) => {
  return (
    <div className='tc-recommended-users-to-follow-list'>
      <div className='tc-recommended-users-to-follow-list__header'>
        <p className='tc-recommended-users-to-follow-list__header__title'>
          Who to follow
        </p>
      </div>

      <div className='tc-recommended-users-to-follow-list__users'>
        {users.map((user) => (
          <TCRecommendedUserToFollow user={user} key={user.userId} />
        ))}
      </div>

      <div className='tc-recommended-users-to-follow-list__options'>
        <p className='tc-recommended-users-to-follow-list__options__text'>
          Show more
        </p>
      </div>
    </div>
  )
}
