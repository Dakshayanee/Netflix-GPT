
import Head from './Head'
import useNowPlayingMovies from '../hooks/useNowPlayingmovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
//custom hook
//this hook fetch the movies and update the store
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Head/>

      {/* Main container
       -videobackground
       -videoTitle
      Secondary container
       -movie list */}
       
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  )
}

export default Browse