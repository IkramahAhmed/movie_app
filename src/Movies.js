import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'

const Movies = () => {
  const {movie} =useGlobalContext();


  return (
    <section className='movie-Page'>
    <div className='grid grid-4-col'>
      {movie.map((currElem)=>{
   const { imdbID, Title, Poster } = currElem;
   const movieName=Title.substring(0,15);//sirf start kay 15 charactrer dikhao tilte kay

return
<NavLink to={`movie/${imdbID}`} key={imdbID}>
          {/* jasai ap NavLink pr click kren to apko uske id mil jae line11*/}
          <div className='card'>
            <div className='card-info'>
<h2>{movieName.length >= 15 ? `${Title}....`:Title}</h2>
<img src={Poster} alt={imdbID} srcSet=""></img>
            </div>
          </div>

        </NavLink>
       
        
      })}
    </div>
    </section>
  )
}

export default Movies;
