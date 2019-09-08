import React from 'react'

import 'components/search/search.styles.css'

interface IProps {
  onInput: (event: React.FormEvent) => void
  placeholder?: string
}

export const Search: React.SFC<IProps> = ({placeholder, onInput}) => (
  <input className='search' type='text' placeholder={placeholder} onInput={onInput} />
)
