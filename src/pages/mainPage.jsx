import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getMovies ,getGenres} from '../app/actions/movieActions'
import Hero from '../components/hero'
import ListMovie from '../components/ListMovie'
const MainPage = () => {
  const dispatch = useDispatch()
 const state = useSelector((store)=>store.movieReducer);
 console.log(state)

    useEffect(()=>{
      //populer filmleri çek stora aktar
     dispatch(getMovies());
     //kategori verisini çek stora aktar
     dispatch(getGenres());
    },[]);

  return (
    <div>
      <Hero/>
      {
        state.genres.map((genre)=>(
          <ListMovie key={genre.ids} genre={genre}/>
        ))
      }
    </div>
  )
}

export default MainPage
