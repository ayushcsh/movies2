import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'
import Home from './home.jsx'
import Favorites  from './favorites.jsx'
import { Routes , Route } from 'react-router-dom'
import Navbar from './navbar.jsx'
import { Movieprovider } from './moviecontext.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Movieprovider>
    <main className='main-content'>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/favorites' element = {<Favorites/>} />
      </Routes>
    </main>
    </Movieprovider>
    </>
  )
}

export default App
