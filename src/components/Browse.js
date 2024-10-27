import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
const Browse = () => {
  // my own custom hook just to make Browse component to be neat
  useNowPlayingMovies();
  return (
    <>
   <Header/>
   <MainContainer/>
   <SecondaryContainer/>
   </>
  )
}


export default Browse