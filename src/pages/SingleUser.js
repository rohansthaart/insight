import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {FaEdit} from 'react-icons/fa'
import EditForm from '../components/EditForm'
import {useUserContext} from '../context/userContext'
function Single() {
    const {id,isLogin,editUser,setEditUser,fetchSingleUser,user,isLoading} = useUserContext()  
    // const [isLoading,setIsLoading] = useState(false);
    // const [user,setUser] = useState([])
    const {_id,name,email,phone,isAdmin} = user

    console.log(user)
    // const fetchUser = async (url)=>{
    //     setIsLoading(true)
    //     try{
    //         const response = await axios.get(url)
    //         const user = await response.data
    //         setIsLoading(false)
    //         setUser(user)
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    // useEffect(()=>{
    //     fetchUser(`api/v1/user/${id}`)
    //     // fetchSingleUser(`api/v1/user/${id}`)
    // },[])

    const handleEdit = async(id)=>{
      try{
        setEditUser(user)
      }catch{

      }
    }

    if(isLoading){
      return <h1>Loading ...</h1>
    }
if(isLogin){

  return (
    <main className='center'>
      <h1>{`Welcome `} </h1>

       <table className="table">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PHONE</th>
      <th scope="col">IS ADMIN?</th>
      <th scope="col">EDIT</th>
    </tr>
  </thead>
  <tbody>
    {
       
         <tr key={_id}>
        <td>
            {_id}
        </td> 
        <td>
            {name}
        </td> 
        
        <td>
            {email}
        </td> 
        <td>
            {phone}
        </td> 
        <td>
            {isAdmin?'YES':'NO'}
        </td> 
        <td>
                   <FaEdit onClick={()=>handleEdit(_id)}/>
                </td>
                
        </tr>
}
    
  </tbody>
  </table>
  {editUser?<EditForm/>:null}
    </main>
  )
}
return (
  <>
    <h1>Please Login</h1>
  </>)

}

export default Single