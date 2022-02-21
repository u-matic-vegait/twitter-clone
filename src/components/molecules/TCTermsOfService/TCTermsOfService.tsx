import './TCTermsOfService.scss'
import { Link } from 'react-router-dom'

export const TCTermsOfService = () => {
  return (
    <div className='tos-wrapper'>
      <div>
        <Link className='tos-wrapper__item--link' to='/home'>
          Terms of Service
        </Link>
        <Link className='tos-wrapper__item--link' to='/home'>
          Privacy Policy
        </Link>
        <Link className='tos-wrapper__item--link' to='/home'>
          Cookie Policy
        </Link>
      </div>
      <div>
        <Link className='tos-wrapper__item--link' to='/home'>
          Accessibility
        </Link>
        <Link className='tos-wrapper__item--link' to='/home'>
          Ads info
        </Link>
        <span className='tos-wrapper__item--showMore'>More ···</span>
      </div>
      <div>
        <span className='tos-wrapper__item'>© 2022 Twitter, Inc.</span>
      </div>
    </div>
  )
}
