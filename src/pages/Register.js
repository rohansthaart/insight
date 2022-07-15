import React,{useState} from 'react'
import {register} from '../utility/endpoints'
import {useNavigate } from 'react-router-dom'


function Register() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword]= useState('')
    const [phone,setPhone] = useState('')
    const [isAdmin,setIsAdmin]= useState(false)
    const navigate = useNavigate()
    const buttonPress = (e)=>{
      e.preventDefault()
      fetch(register,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({name,email,password,phone,isAdmin})
      }).then(navigate("/")).catch(err=>console.log(err))
      setName('')
      setPassword('')
      setEmail('')
      setPhone('')
      
    }
    
  
    return (
      <div className='center'>
        <h1>REGISTER PAGE</h1>
        <form>
          <label>Name: </label>
         <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
          <label> Email: </label>
          <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>Password: </label>
          <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
          <label>Phone: </label>
          <input type="text" placeholder="Enter Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/>
          <label>Is Admin: </label>
          <input type="checkbox" value={isAdmin} onChange={(e)=>setIsAdmin(e.target.value)}/><br/>
          <button type='submit' onClick={buttonPress}>Register</button>
        </form>
      </div>
    )
  }


export default Register