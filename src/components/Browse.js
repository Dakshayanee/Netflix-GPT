
import Head from './Head'
import useNowPlayingMovies from '../hooks/useNowPlayingmovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
//custom hook
  useNowPlayingMovies();
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