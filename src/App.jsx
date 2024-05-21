import { useState, useEffect } from 'react'
import * as PetService from './services/petService'
import Home from './components/home'
import Create from './components/create'
import Nav from './components/nav'
import Show from './components/Show/Show'

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

  const clickedNavLink = (page) => {
    setPage(page)
  }

  const handleDelete = async (petId) => {
    await PetService.deletePet(petId)
    getPets()
    setPage('home')
  }

  return (
    <>
      <Nav {...{clickedNavLink}} />
      {page === 'home' && <Home {...{petList, handleClick}}/>}
      {page === 'create' && <Create {...{handleCreate}} />}
      {page === 'show' && <Show {...{selectedPet, handleDelete}} />}
    </>
  )
}

export default App