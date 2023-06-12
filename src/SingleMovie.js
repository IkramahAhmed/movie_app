import React, { useState,useEffect } from "react";

import { NavLink, useParams } from 'react-router-dom'
import {API_URL} from "./context";
const SingleMovie = () => {
    const {id} =useParams();//use paramas say jo jobhe url kay end men id likhe hoe ge woh screen pr show krwae he is say fetch api karnay men madad milay ge 
  //pehlay search men search men search karnay pr data araha tha or ismen jispay click kar rahay uske id kay through uska data araha he
    const [isLoading,setIsLoading]=useState(true); 
    const [movie,setMovie]=useState(""); //multiple array nai chahiay sirf ek movie chahiay isliay  "" yeh use kia he
    const getMovies =async(url)=>{
        try{
            const res=await fetch(url);
            const data= await res.json();
            console.log(data);
            if(data.Response === "True"){
              
                setIsLoading(false);
                setMovie(data);
            }
   
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
      let timeOut =setTimeout(()=>{//settimeout say fiada yeh he kay pehlay hamara hrword pr data araha tha api say humnay 3 second kay bad bola data aye wrna hrword pr data araha tha ab sirf ek data araha he
        getMovies(`${API_URL}&i=${id}`);//jab bh woh click karay kise movie pr to uska data ajae same search movie ke tarhan
      },3000)
      return()=>clearTimeout(timeOut);
    },[id])
  if(isLoading){
    return(
      <div className="movie-section">
        <div className="loading">Loading.....</div>
      </div>
    )
  }
    return (
    <section className="movie-section">
      <div className="movie-card">
<figure>
  <img src={movie.Poster} alt=""></img>
</figure>
<div className="card-content">
  <p className="title">{movie.Title}</p>
  <p className="card-text">{movie.Released}</p>
  <p className="card-text">{movie.Genre}</p>
  <p className="card-text">IMdb:{movie.imdbRating}</p>
  <p className="titcard-textle">{movie.Country}</p>
<NavLink to="/" className="back-btn">G back</NavLink>
</div>
      </div>
    </section>
  )
}

export default SingleMovie
