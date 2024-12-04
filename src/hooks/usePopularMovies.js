import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import {  addPopularMovies } from "../Utils/movieSlice";

//custom hook is nothing but normal js function
//use this hook in browse
const usePopularMovies = () =>{

    //fetch data from TMDB API and update store
    const dispatch =useDispatch();

    //fetch  now playing movie api
    const getPopularmovies = async () =>{
     const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTIONS
     );
       const json=await data.json();
      // console.log(json);
  
       //add this json into movieSlice using dispatch
       dispatch(addPopularMovies(json.results))
    };
      //call the api only once
    useEffect(()=>{
      getPopularmovies ();
    },[])
    
}

export default usePopularMovies;