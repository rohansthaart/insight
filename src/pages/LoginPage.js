import React ,{useState}from 'react'
import {login} from '../utility/endpoints'
import {useUserContext} from '../context/userContext'
import {useNavigate } from 'react-router-dom'


function LoginPage() {

  const {setIsLogin,setId,id,setIsAdmin} = useUserContext()
  const [email,setName] = useState('')
  const [password,setPassword]= useState('')
  const navigate = useNavigate()
  const buttonPress = (e)=>{
    e.preventDefault()
    fetch(login,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email,password})
    }).then(res=>res.json()).then(result=>{
      if(result.status === 200){
        setIsLogin(true)
        setId(result.id)
        setIsAdmin(result.isAdmin)
        if(result.isAdmin)navigate("/userlist")
        else navigate("/singleuser")
        
      }
    }).catch(err=>console.log(err))
    setName('')
    setPassword('')
  }
  

  return (
    <div className='center'>
      <h1>LOGIN PAGE</h1>
      <form>
        <input type="text" placeholder='Email' value={email} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit' onClick={buttonPress}>Login</button>
      </form>
    </div>
  )
}

export default LoginPage