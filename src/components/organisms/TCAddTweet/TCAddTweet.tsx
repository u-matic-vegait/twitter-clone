import './TCAddTweet.scss'
import default_profile_image from './../../../assets/images/default_profile_image.png'
import { IoImageOutline } from 'react-icons/io5'
import { AiOutlineFileGif } from 'react-icons/ai'
import { MdOutlineStackedBarChart } from 'react-icons/md'
import { BsEmojiSmile, BsCalendarPlus } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FaGlobeAmericas } from 'react-icons/fa'
import { TCButton } from '../../atoms/TCButton/TCButton'
import { useState } from 'react'

export const TCAddTweet = () => {
  const [inputTouched, setInputTouched] = useState(false)

  const textarea = document.querySelector('textarea')
  textarea?.addEventListener('input', (e: any) => {
    textarea.style.height = 'auto'
    let scHeight = e.target.scrollHeight
    textarea.style.height = `${scHeight}px`
  })

  return (
    <div className='at-wrapper'>
      <div className='at-wrapper__left'>
        <img
          src={default_profile_image}
          alt='default_profile_image'
          className='profile_image'
        />
      </div>
      <div className='at-wrapper__right'>
        <textarea
          placeholder={`What's happening?`}
          maxLength={280}
          rows={1}
          onFocus={() => setInputTouched(true)}
        />
        {inputTouched && (
          <div className='whoCanReplyWrapper'>
            <div className='whoCanReply'>
              <FaGlobeAmericas className='whoCanReply__icon' />
              <span className='whoCanReply__text'> Everyone can reply </span>
            </div>
          </div>
        )}
        <div className='at-wrapper__right-iconsAndButton'>
          <div className='iconsWrapper'>
            <IoImageOutline className='icon' />
            <AiOutlineFileGif className='icon' />
            <MdOutlineStackedBarChart className='icon' />
            <BsEmojiSmile className='icon' />
            <BsCalendarPlus className='icon' />
            <HiOutlineLocationMarker className='icon' />
          </div>
          <div className='tweetButtonWrapper'>
            <TCButton
              text='Tweet'
              backgroundColor='#1d9bf0'
              color='white'
              padding='8px 16px'
              fontSize='16px'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
