import React from 'react'
import './App.css'
import Ingredients from './components/Ingredients'
import ShowRecipe from './components/ShowRecipe'
import Header from './components/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Header/>
      <Ingredients/>
      <ShowRecipe/>
      <h1>This is APP</h1>
    </>
  )
}

export default App
