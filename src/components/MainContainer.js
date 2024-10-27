import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './videoBackground'
import VideoTitle from './videoTitle'
const MainContainer = () => {
 const movies = useSelector(store => store.movies?.nowPlayingMovies)
 if(movies===null) return; // known as early return.
 const mainMovie = movies[0];
 const {original_title,overview,id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview = {overview}></VideoTitle>
        <VideoBackground id = {id}/>
    </div>
  )
}

export default MainContainer