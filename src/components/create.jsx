import { useState } from 'react'

function create({handleCreate}) {

    const [pet, setPet] = useState({
        name: '',
        age: '',
        breed: '',
    })


    const handleChange = (event) => { 
        setPet({ ...pet, [event.target.name]: event.target.value});
     }

  return (
    <form onSubmit={ () => handleCreate(pet)}>
        <label htmlFor="name">Name: </label>
        <input 
            type="text" 
            name="name" 
            id="name"  
            value={pet.name}
            onChange={handleChange}
        />

        <label htmlFor="age">Age: </label>
        <input 
            type="number"
            name="age" 
            id="age"  
            value={pet.age}
            onChange={handleChange}
        />

        <label htmlFor="breed">Breed: </label>
        <input
            type="text" 
            name="breed" 
            id="breed"  
            value={pet.breed}
            onChange={handleChange}
        />

        <button type="submit">Add Pet</button>
    </form>
  )
}

export default create
