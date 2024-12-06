
import Head from './Head'
import useNowPlayingMovies from '../hooks/useNowPlayingmovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch =useSelector(store => store.gpt.showGptSearch);
//custom hook
//this hook fetch the movies and update the store
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Head/>
      {/* //only show when gptSearch clicked otherwise show main/secondary container  */}
      {
        showGptSearch ? (
          <GPTSearch/>
        ) : (
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        )
      }

     
      {/* Main container
       -videobackground
       -videoTitle
      Secondary container
       -movie list */}
       
       
    </div>
  )
}

export default Browse