import './TCSearchbar.scss'
import { RiSearchLine } from 'react-icons/ri'
import { useRef, useState } from 'react'

export const TCSearchbar = () => {
  const searchbarInputRef = useRef<HTMLInputElement | null>(null)
  const [inputFocused, setInputFocused] = useState(false)

  return (
    <div
      className={
        inputFocused ? 'tc-searchbar tc-searchbar--active' : 'tc-searchbar'
      }
      onClick={() => searchbarInputRef.current?.focus()}
    >
      <span className='tc-searchbar__icon'>
        <RiSearchLine
          className={`tc-searchbar__icon__svg
          ${inputFocused ? 'tc-searchbar__icon__svg--active' : ''}`}
        />
      </span>

      <span className='tc-searchbar__input'>
        <input
          onBlur={() => setInputFocused(false)}
          onFocus={() => setInputFocused(true)}
          ref={searchbarInputRef}
          type='text'
          placeholder='Search Twitter'
          className='tc-searchbar__input__field'
        />
      </span>
    </div>
  )
}
