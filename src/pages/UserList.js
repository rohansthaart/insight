import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'
import { useUserContext } from '../context/userContext'
import EditForm from '../components/EditForm'
import {Link} from 'react-router-dom'
import axios from 'axios'


function UserList() {
  const {users,isLoading,isLogin,fetchUsers,setEditUser,editUser} = useUserContext()
  

    const deleteUser = async (id)=>{
      try{
       await axios.delete(`api/v1/user/delete/${id}`)
       fetchUsers('api/v1/user')
      }catch(error){
      }
    }

    const handleEdit = async(id)=>{
      try{
        const user = await users.find((user)=>user._id === id)
        setEditUser(user)
      }catch{

      }
    }
     


if(isLoading){
  return <h1>Loading ...</h1>
}
if(isLogin){

  return (
    <main className=''>
      <h1>Welcome To Admin Dashboard </h1>

       <table className="table">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PHONE</th>
      <th scope="col">IS ADMIN?</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
    {
      (users).map(user=>{
        const {_id,name,email,phone,isAdmin} = user
        return <tr key={_id}>
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
                   <FaEdit onClick={()=>{handleEdit(_id)}}/>
                </td>
                <td>
                    <FaTrash onClick={()=>{deleteUser(_id)}}/>
                </td>
        </tr>
})
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
    <h3><Link to='/login'>Login</Link></h3>
  </>
)

}

export default UserList