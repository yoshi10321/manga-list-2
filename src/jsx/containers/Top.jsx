import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import { connect } from 'react-redux'
import MangaList from '../components/mangaList'
import EditCard from '../components/editCard'

injectTapEventPlugin()

export var Top = class Top extends React.PureComponent {

  render () {
    return (
      <div>
        <h1>MANGA MANAGE</h1>
        <br />
        <MangaList />
        <EditCard />
      </div>
    )
  }
}

export default connect()(Top)
