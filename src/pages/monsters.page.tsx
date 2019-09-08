import React from 'react'

import { IMonster } from 'types/monsters.types'
import { CardList } from 'components/card-list/card-list.component'
import { Search } from 'components/search/search.component'

interface IState {
  monsters: Array<IMonster>
  search: string
}

export class Monsters extends React.Component<{}, IState> {
  state: IState = {
    monsters: [],
    search: '',
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(monsters => this.setState({
      monsters: monsters.map(
        (monster: IMonster) => ( {...monster, image: `https://robohash.org/${monster.id}?set=set2&size=200x200`} )
      )
    }))
  }

  handleOnInput = (event: React.FormEvent) => {
    const search = ((event.target as HTMLInputElement).value)
    this.setState({search})
  }

  render() {
    const monsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(this.state.search))
    return(
      <>
        <Search onInput={this.handleOnInput} placeholder="Look for monsters to hire"/>
        <CardList items={monsters}/>
      </>
    )
  }
}
