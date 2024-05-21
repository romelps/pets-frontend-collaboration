

function home({petList}) {
  return (
    <>
    <h1>Our Home Page</h1>
    <ul>
    {petList.map((pet,i)=>( 
        <li key={i}>
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