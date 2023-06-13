import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-dark p-4 d-flex justify-content-between'>
      <img onClick={()=>navigate('/')} style={{width:'150px',cursor:'pointer'}} src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
<div className='m-4 d-flex gap-3'>
<button className='btn btn-warning'>Login</button>
      <button className='btn btn-success'>Sign Up</button>
</div>
      
    </div>
  )
}

export default Header