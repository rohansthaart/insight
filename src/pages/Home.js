import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='center'>
    <h1>Welcome</h1>
       <Link to='/login'><h1>Login </h1></Link>

       <Link to='/register'><h1> Register</h1></Link>
    </div>
  )
}

export default Home