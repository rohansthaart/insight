import axios from 'axios'
import React,{useState} from 'react'
import { useUserContext } from '../context/userContext'
function EditForm() {
   
    const {editUser,fetchUsers,setEditUser,isAdmin,id,fetchSingleUser,setIsEdited} = useUserContext()
    console.log(editUser._id);
    const [name,setName] = useState(editUser.name)
    const [email,setEmail] = useState(editUser.email)
    const [phone,setPhone] = useState(editUser.phone)
    const submitEdit =async (e)=>{
        e.preventDefault()
        try{
            await axios.patch(`api/v1/user/${editUser._id}`,{name,email,phone})
           isAdmin?fetchUsers(`api/v1/user`):fetchSingleUser(`api/v1/user/${id}`)
            setEditUser()
            setIsEdited(true)
        }catch(error){  

        }
    }
  return (
    <div> 
        <h3>{`Edit user with id: ${editUser._id}`}</h3>
    <form>
    <label>Name: </label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br />
    <label>Email: </label>
    <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} /><br />
    <label>Phone: </label>
    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br />
    <button type='submit' onClick={submitEdit}>Edit User</button>
   </form>
   
   </div>
  )
}

export default EditForm