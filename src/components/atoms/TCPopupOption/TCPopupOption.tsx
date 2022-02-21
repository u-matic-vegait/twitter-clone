import './TCPopupOption.scss'
import { FunctionComponent } from 'react'

interface TCPopupOptionProps {
  iconName: string
  text: string
}

export const TCPopupOption: FunctionComponent<TCPopupOptionProps> = ({
  iconName,
  text,
}) => {
  return (
    <div className='popup__item'>
      <img
        className='popup__item-image'
        src={`icons/${iconName}.svg`}
        alt='sad_emoji_icon'
      />
      <span className='popup__item-text'>{text}</span>
    </div>
  )
}
