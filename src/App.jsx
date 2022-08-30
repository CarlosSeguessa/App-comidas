import { useState } from 'react'
import {RoutesApp} from './RoutesApp' 
import {NavBar} from './components/NavBar'
function App () {
  return (
    <div className='App'>
      <NavBar />
      <RoutesApp />
    </div>
  )
}

export default App;
