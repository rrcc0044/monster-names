import React, { useState, useEffect } from 'react'

import { IMonster } from 'types/monsters.types'
import { CardList } from 'components/card-list/card-list.component'
import { Search } from 'components/search/search.component'

export const Monsters: React.FC = () => {
  const [monsters, setMonsters] = useState<Array<IMonster>>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const jsonResp = await response.json()
      setMonsters(jsonResp.map((monster: IMonster) => ({ ...monster, image: `https://robohash.org/${monster.id}?set=set2&size=200x200` })))
    }

    fetchMonsters()
  }, [])

  const handleOnInput = (event: React.FormEvent) => {
    setSearch(((event.target as HTMLInputElement).value))
  }

  const filteredMonsters = monsters.filter((monster: IMonster) => monster.name.toLowerCase().includes(search))

  return (
      <>
        <Search onInput={handleOnInput} placeholder="Look for monsters to hire"/>
        <CardList items={filteredMonsters}/>
      </>
  )
}
