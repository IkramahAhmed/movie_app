import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query,setQuery,isError} =useGlobalContext();
  return (
  <section className='search-section'>
    <h2>Search your Favourate Movie</h2>
    <form action='#' onSubmit={(e)=>e.preventDefault()}>
<div>
  <input type={"text"} placeholder="search here" value={query} onChange={(e)=>setQuery(e.target.value)}>
  </input>
</div>


    </form>
    <div className='card-error'>
      <p>{isError.show && isError.msg}</p>
    </div>
    </section>
    
//search functionally 

//seen yeh kay jo bhe data serach box men daal raha he usko get kia he or jobhe usmen update horaha he usko ek state men 
//men save krwalia he then jahan pr hum pehlay sirf titanic ka data magwa rahay thay context kay folder men url kay through wahan hum phr woh data magaengay jo 
//usernay dala he search box men or woh hum nay usestate men save krwaya hoa tha (query)
   

  )
}

export default Search

