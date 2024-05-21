import { useState, useEffect } from 'react'
import * as PetService from './services/petService'
import Home from './components/home'
import Create from './components/create'

function App() {

  const [petList, setPetList] = useState([])
  const [page, setPage] = useState('home')
  const [selectedPet, setSelectedPet] = useState({})

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

  const handleClick = (pet) => {
    setSelectedPet(pet)
    setPage('show')
  }

  return (
    <>
      {page === 'home' && <Home {...{petList, handleClick}}/>}
      {page === 'create' && <Create {...{handleCreate}} />}
      {page === 'show' && <Show {...{selectedPet}} />}
    </>
  )
}

export default App