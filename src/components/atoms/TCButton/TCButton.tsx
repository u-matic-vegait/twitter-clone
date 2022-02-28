import './TCButton.scss'
import { FunctionComponent } from 'react'

interface TCButtonProps {
  text: string
  type?: TCButtonType
  size?: TCButtonSize
}

export enum TCButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum TCButtonSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export const TCButton: FunctionComponent<TCButtonProps> = ({
  text,
  type,
  size,
}) => {
  return (
    <button className={`tc-button tc-button--${type} tc-button--${size}`}>
      {text}
    </button>
  )
}
