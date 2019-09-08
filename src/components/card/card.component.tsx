import React from 'react'

import { ICardListItem } from 'types/base.types'

import 'components/card/card.styles.css'

interface IProps {
  item: ICardListItem
}

export const Card: React.FC<IProps> = ({ item }) => (
  <div className='card-container'>
    <img src={item.image} alt={item.name} />
    <h1> {item.name} </h1>
  </div>
)
