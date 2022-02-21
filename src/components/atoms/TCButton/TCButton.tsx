import './TCButton.scss'
import { FunctionComponent } from 'react'

interface TCButtonProps {
  text: string
  color?: string
  backgroundColor?: string
  padding?: string
  fontSize?: string
}

export const TCButton: FunctionComponent<TCButtonProps> = ({
  text,
  color,
  backgroundColor,
  padding,
  fontSize,
}) => {
  return (
    <button
      className='tc-button'
      style={{
        color: color,
        backgroundColor: backgroundColor,
        padding: padding,
        fontSize: fontSize,
      }}
    >
      {text}
    </button>
  )
}
