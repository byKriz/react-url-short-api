import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Details } from './containers/Details/Details'
import { Hero } from './containers/Hero/Hero'
import { LinkShorter } from './containers/LinkShorter/LinkShorter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Hero />
      <LinkShorter />
      <Details />

    </div>
  )
}

export default App
