

function home({handleClick,petList}) {
  return (
    <>
    <h1>Our Home Page</h1>
    <ul>
    {petList.map((pet,i)=>( 
        <li key={i} onClick={() => handleClick(pet)}>
            {
                pet.name 
            }
        </li>
    ))}
    </ul>
    </>
  )
}

export default home