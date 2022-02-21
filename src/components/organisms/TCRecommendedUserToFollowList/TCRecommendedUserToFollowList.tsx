import { FunctionComponent } from 'react'
import { RecommendedUserToFollow } from '../../../model/RecommendedUserToFollow'
import { TCRecommendedUserToFollow } from '../../molecules/TCRecommendedUserToFollow/TCRecommendedUserToFollow'
import './TCRecommendedUsersToFollowList.scss'

interface TCRecommendedUsersToFollowlistProps {
  users: RecommendedUserToFollow[]
}

export const TCRecommendedUsersToFollowlist: FunctionComponent<
  TCRecommendedUsersToFollowlistProps
> = ({ users }) => {
  return (
    <div className='recommendedUsersToFollow'>
      <div className='header'>
        <p className='header__title'> Who to follow </p>
      </div>

      {users.map((user) => (
        <TCRecommendedUserToFollow user={user} key={user.userId} />
      ))}

      <div className='footer'>
        <p className='footer_text'>Show more</p>
      </div>
    </div>
  )
}
