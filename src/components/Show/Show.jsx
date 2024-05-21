

function Show({ selectedPet }) {
  return (
    <>
        <h1>{ selectedPet.name }</h1>
            <ul>
                <li>Breed: { selectedPet.breed }</li>
                <li>Age: { selectedPet.age }</li>
            </ul>
            <button onClick={() => handleDelete(selectedPet._id)}>Delete</button>
    </>
  );
}

export default Show;