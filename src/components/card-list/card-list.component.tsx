import React from 'react'

import { ICardListItem } from 'types/base.types'
import { Card } from 'components/card/card.component'

import 'components/card-list/card-list.styles.css'

interface IProps {
  items: Array<ICardListItem>;
}

export const CardList: React.FC<IProps> = ({items}) => (
  <div className='card-list'>
    {
      items.map((item: ICardListItem) => (
        <Card key={item.id} item={item} />
      ))
    }
  </div>
)
