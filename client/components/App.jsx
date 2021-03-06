import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'

import {getGreeting} from '../apiClient'

import Instructions from './Instructions'
import Play from './Play'
import Result from './Result'
import Text from './Text'
import Home from './Home'

const App = () => {

  return (
    <>
    <div className=''>
    <Home />
    <Route exact path='/' component={Instructions} />
    <Route exact path ='/Play' component={Play} />
    <Route exact path='/Result' component={Result} />
    </div>
    </>
  )
}

export default App
