import './TCTermsOfService.scss'
import { Link } from 'react-router-dom'

export const TCTermsOfService = () => {
  return (
    <div className='wrapper'>
      <div>
        <Link className='wrapper__item--link' to='/home'>
          Terms of Service
        </Link>
        <Link className='wrapper__item--link' to='/home'>
          Privacy Policy
        </Link>
        <Link className='wrapper__item--link' to='/home'>
          Cookie Policy
        </Link>
      </div>
      <div>
        <Link className='wrapper__item--link' to='/home'>
          Accessibility
        </Link>
        <Link className='wrapper__item--link' to='/home'>
          Ads info
        </Link>
        <span className='wrapper__item--showMore'>More ···</span>
      </div>
      <div>
        <span className='wrapper__item'>© 2022 Twitter, Inc.</span>
      </div>
    </div>
  )
}
