import React from 'react'
import './App.css'
import Main from './pages/Main'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <h1>Hi</h1>
        <Switch>
          <Route exact path={'/'}>
            <Main/>
          </Route>
          <Route exact path={'/about'}>
            <About/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
