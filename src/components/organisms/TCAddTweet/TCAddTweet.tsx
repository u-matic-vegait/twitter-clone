import './TCAddTweet.scss'
import default_profile_image from './../../../assets/images/default_profile_image.png'
import { IoImageOutline } from 'react-icons/io5'
import { AiOutlineFileGif } from 'react-icons/ai'
import { MdOutlineStackedBarChart } from 'react-icons/md'
import { BsEmojiSmile, BsCalendarPlus } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FaGlobeAmericas } from 'react-icons/fa'
import {
  TCButton,
  TCButtonSize,
  TCButtonType,
} from '../../atoms/TCButton/TCButton'
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
    <div className='tc-add-tweet'>
      <div className='tc-add-tweet__avatar'>
        <img
          src={default_profile_image}
          alt='default_profile_image'
          className='tc-add-tweet__avatar__image'
        />
      </div>
      <div className='tc-add-tweet__input'>
        <textarea
          placeholder={`What's happening?`}
          maxLength={280}
          rows={1}
          onFocus={() => setInputTouched(true)}
        />
        {inputTouched && (
          <div className='tc-add-tweet__input__privacy'>
            <div className='tc-add-tweet__input__privacy__who-can-reply'>
              <FaGlobeAmericas className='tc-add-tweet__input__privacy__who-can-reply__icon' />
              <span className='tc-add-tweet__input__privacy__who-can-reply__text'>
                Everyone can reply
              </span>
            </div>
          </div>
        )}
        <div className='tc-add-tweet__input__options'>
          <div className='tc-add-tweet__input__options__input-types'>
            <div className='tc-add-tweet__input__options__input-types__icon-wrapper'>
              <IoImageOutline className='tc-add-tweet__input__options__input-types__icon' />
            </div>
            <div className='tc-add-tweet__input__options__input-types__icon-wrapper'>
              <AiOutlineFileGif className='tc-add-tweet__input__options__input-types__icon' />
            </div>
            <div className='tc-add-tweet__input__options__input-types__icon-wrapper'>
              <MdOutlineStackedBarChart className='tc-add-tweet__input__options__input-types__icon' />
            </div>
            <div className='tc-add-tweet__input__options__input-types__icon-wrapper'>
              <BsEmojiSmile className='tc-add-tweet__input__options__input-types__icon' />
            </div>
            <div className='tc-add-tweet__input__options__input-types__icon-wrapper'>
              <BsCalendarPlus className='tc-add-tweet__input__options__input-types__icon' />
            </div>
            <div className='tc-add-tweet__input__options__input-types__icon-wrapper'>
              <HiOutlineLocationMarker className='tc-add-tweet__input__options__input-types__icon' />
            </div>
          </div>
          <div className='tc-add-tweet__input__options__post-button'>
            <TCButton
              text='Tweet'
              type={TCButtonType.PRIMARY}
              size={TCButtonSize.MD}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
