import { useState, useEffect } from 'react'
import * as PetService from './services/petService'
import Home from './components/home'

function App() {

  const [petList, setPetList] = useState([])

  const getPets = async () => {
    const allPets = await PetService.index()
    setPetList(allPets)
  }

  useEffect(()=>{
    getPets()
  }, [])
  
  return (
    <>
      <Home {...{petList}}/>
    </>
  )
}

export default App