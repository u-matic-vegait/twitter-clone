import './TCSearchbar.scss'
import { RiSearchLine } from 'react-icons/ri'
import { useRef, useState } from 'react'

export const TCSearchbar = () => {
  const searchbarInputRef = useRef<HTMLInputElement | null>(null)
  const [inputFocused, setInputFocused] = useState(false)

  return (
    <div
      className={inputFocused ? 'searchbar searchbar--active' : 'searchbar'}
      onClick={() => searchbarInputRef.current?.focus()}
    >
      <RiSearchLine
        className={
          inputFocused
            ? 'searchbar__search-icon searchbar__search-icon--active'
            : 'searchbar__search-icon'
        }
      />
      <input
        onBlur={() => setInputFocused(false)}
        onFocus={() => setInputFocused(true)}
        ref={searchbarInputRef}
        type='text'
        placeholder='Search Twitter'
        className='searchbar__input'
      />
    </div>
  )
}
