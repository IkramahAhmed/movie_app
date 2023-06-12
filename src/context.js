import React, { useContext, useState,useEffect } from "react";

  //context(wrehouse)
  //provider(delivery)
export const API_URL=`https://www.omdbapi.com/?apikey=d22e1745`;
  //provider(useContext(you)//jo data get krkay apnay pass rakhay
  const AppContext= React.createContext();

  //we need to create a provider func
  const AppProvider =({children })=>{
const [isLoading,setIsLoading]=useState(true);
const [movie,setMovie]=useState([]);
const [isError,setIsError]=useState({show: "false",msg:""});
const [query,setQuery]=useState("titanic");
const getMovies =async(url)=>{
  setIsLoading(true);
    try{
        const res=await fetch(url);
        const data= await res.json();
        console.log(data);
        if(data.Response === "True"){
          
            setIsLoading(false);
            setIsError({
              show:false
              
          });
             
            setMovie(data.Search);
        }
        else{
setIsError({
    show:true,
    msg:data.Error
})
        }
    }
    catch(error){
        console.log(error);
    }
}
useEffect(()=>{
  let timeOut =setTimeout(()=>{//settimeout say fiada yeh he kay pehlay hamara hrword pr data araha tha api say humnay 3 second kay bad bola data aye wrna hrword pr data araha tha ab sirf ek data araha he
    getMovies(`${API_URL}&s=${query}`);
  },3000)
  return()=>clearTimeout(timeOut);
  
},[query])
    return( <AppContext.Provider value={{isLoading,isError,movie,setQuery}}>
      {children}
    </AppContext.Provider>
    )
  };   

  //global custoom hook
  const useGlobalContext=()=>{
return useContext(AppContext);
  }
  export {AppContext,AppProvider,useGlobalContext}
  //jo 