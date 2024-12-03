import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    //to fetch the data from redux store use useSelector
    const movies=useSelector(store => store.movies?.nowPlayingMovies);

    //to display the 1st movie as a background video 
     if(movies == null) return;
     const mainMovie=movies[0];
     console.log(mainMovie);

     const{original_title,overview,id} =mainMovie;

  return (
    <div>
        {/* logic for this video title in the videoTitle component */}
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer