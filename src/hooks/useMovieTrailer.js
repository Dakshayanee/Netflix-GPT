import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addTrailorVideo } from "../Utils/movieSlice";


//Custom hook
const useMovieTrailer = (movieId) =>{

    const dispatch=useDispatch(); 

   //fetch trailer video && updating the store with trailer video data
   const getMovieVideos = async () =>{
    const data= await fetch('https://api.themoviedb.org/3/movie/'+
        movieId +
        '/videos?language=en-US',API_OPTIONS)
              //this api-options will come from constants
              const json=await data.json();
              //console.log(json);

              //this result came from the above json
              const filterData =json.results.filter(video => video.type== "Trailer");
              //because filterData has 3 elements we want 1 trailer
              //if filterData does contain trailer then get it otherwise get 1st data of json.results
              const trailer = filterData.length ? filterData[0] : json.results[0] ;
             // console.log(trailer);

              //put that trailor video in redux store then fetch it 
              //2nd way is use useState
              dispatch(addTrailorVideo(trailer));
 };   

 useEffect(() =>{
     getMovieVideos();
 },[])

}

export default useMovieTrailer;