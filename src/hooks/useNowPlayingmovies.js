import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../Utils/movieSlice";

//custom hook is nothing but normal js function
const useNowPlayingMovies = () =>{

    //fetch data from TMDB API and update store
    const dispatch =useDispatch();

    //fetch  now playing movie api
    const getNowPlayingMovies = async () =>{
     const data= await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}',
      API_OPTIONS
     );
       const json=await data.json();
      // console.log(json);
  
       //add this json into movieSlice using dispatch
       dispatch(addNowPlayingMovies(json.results))
    };
      //call the api only once
    useEffect(()=>{
         getNowPlayingMovies();
    },[])
    
}

export default  useNowPlayingMovies;