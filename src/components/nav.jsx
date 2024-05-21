
function nav({clickedNavLink}) {
  return (
    <nav>
        <ul>
            <li onClick={()=>clickedNavLink('home')}>Home</li>
            <li onClick={()=>clickedNavLink('create')}>Create</li>
        </ul>
    </nav>
  )
}

export default nav