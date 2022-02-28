import './TCTermsOfService.scss'
import { Link } from 'react-router-dom'

export const TCTermsOfService = () => {
  return (
    <div className='tc-terms-of-service'>
      <Link className='tc-terms-of-service__link' to='/home'>
        Terms{'\u00A0'}of{'\u00A0'}Service
      </Link>
      <Link className='tc-terms-of-service__link' to='/home'>
        Privacy{'\u00A0'}Policy
      </Link>
      <Link className='tc-terms-of-service__link' to='/home'>
        Cookie{'\u00A0'}Policy
      </Link>
      <Link className='tc-terms-of-service__link' to='/home'>
        Accessibility
      </Link>
      <Link className='tc-terms-of-service__link' to='/home'>
        Ads{'\u00A0'}info
      </Link>
      <span className='tc-terms-of-service__link'>More{'\u00A0'}···</span>
      <span className='tc-terms-of-service__item'>
        ©{'\u00A0'}2022{'\u00A0'}Twitter,{'\u00A0'}Inc.
      </span>
    </div>
  )
}
