import React from 'react'
import { useSelector } from 'react-redux';


export const baseImageUrl='https://image.tmdb.org/t/p/original';

const Hero = () => {
  const state = useSelector((store)=>store.movieReducer);

   const index = Math.round(Math.random()*19);

  const film =state.populerFilms[index]
  
  return (
    <div className=' row bg-dark text-light p-4 '>
    <div className='col-md-6 mb-3 d-flex flex-column justify-content-center gap-4'>
      <h1>{film?.title}</h1>
      <p>{film?.overview}</p>
      <p className='text-warning'>IMDB:{film?.vote_average}</p>

      <div className='d-flex justify-content-center gap-3 '>
        <button className='btn btn-danger '>Watch Now</button>
        <button className='btn btn-primary'>Add to the list</button>
      </div>
      </div>
    <div className='col-md-6  d-flex align-items-center' >

      <img className='rounded'  style={{width:'500px'}} src={`${baseImageUrl}${film?.backdrop_path}`} alt="" />



    </div>


      
      
      
      </div>
  )
}

export default Hero;