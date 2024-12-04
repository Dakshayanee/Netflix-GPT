import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  //get movies from store
  const movies = useSelector(store => store.movies);
  return ( 
    //if contains movie only then render
    movies && (
     // if you want to take a container a little up for that -marging top(-mt)
     //to bring text on top use z index
     <div className=' bg-black'>
      <div className='-mt-72 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
      </div> 
        {/* movie list-popular
        movie list-Now playing
        movie list-trending */}
      </div>
    )
  )
}

export default SecondaryContainer