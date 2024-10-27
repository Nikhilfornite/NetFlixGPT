import {useEffect } from 'react'
import { API_options } from '../utils/constants'
import {useDispatch} from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';

const useGetTrailerVideo = (movie_id) => {
    const dispatch = useDispatch();
    const getMovieVideos  = async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`,API_options);
    const json = await data.json();
    const filteredtrailer = json.results.filter((video=>(
      video.type === 'Trailer' // what if the film has no trailer
    )));
    const Trailer = filteredtrailer.length? filteredtrailer[0]:json.results[0]; // it has key which is a youtube key.
    dispatch(addTrailerVideo(Trailer))
  }
  useEffect(()=>{
    getMovieVideos()
  },[])

}

export default useGetTrailerVideo