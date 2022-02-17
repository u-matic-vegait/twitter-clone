import './TCOptionsPopup.scss'
import { FunctionComponent } from 'react'
import { TCPopupOption } from '../../atoms/TCPopupOption/TCPopupOption'
import { PopupOption } from '../../../model/PopupOption'

interface TCOptionsPopupProps {
  options: PopupOption[]
}

export const TCOptionsPopup: FunctionComponent<TCOptionsPopupProps> = ({
  options,
}) => {
  return (
    <div className='popup'>
      {options.map((option) => (
        <TCPopupOption
          iconName={option.iconName}
          text={option.text}
          key={option.text}
        />
      ))}
    </div>
  )
}
