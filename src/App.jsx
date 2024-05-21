import { useState, useEffect } from 'react'
import * as PetService from './services/petService'
import Home from './components/home'
import Create from './components/create'

function App() {

  const [petList, setPetList] = useState([])
  const [page, setPage] = useState('home')

  const getPets = async () => {
    const allPets = await PetService.index()
    setPetList(allPets)
  }

  useEffect(()=>{
    getPets()
  }, [])
  
  const handleCreate = async (pet) => {
    await PetService.create(pet)
  }

  return (
    <>
      {page === 'home' && <Home {...{petList}}/>}
      {page === 'create' && <Create {...{handleCreate}} />}
    </>
  )
}

export default App