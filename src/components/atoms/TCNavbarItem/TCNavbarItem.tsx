import './TCNavbarItem.scss'
import home from './../../../assets/icons/navbar/home.svg'
import explore from './../../../assets/icons/navbar/explore.svg'
import notifications from './../../../assets/icons/navbar/notifications.svg'
import messages from './../../../assets/icons/navbar/messages.svg'
import bookmarks from './../../../assets/icons/navbar/bookmarks.svg'
import lists from './../../../assets/icons/navbar/lists.svg'
import profile from './../../../assets/icons/navbar/profile.svg'
import more from './../../../assets/icons/navbar/more.svg'

export const TCNavbarItem = () => {
  return (
    <ul>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <img src={home} width='30px' style={{ color: 'black' }} />
        <span> Home </span>
      </li>
    </ul>
  )
}
