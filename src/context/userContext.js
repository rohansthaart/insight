import axios from 'axios'
import React,{useState, useEffect, useContext} from 'react'
const UserContext = React.createContext();

export const UserProvider = ({children})=>{
    const [isLoading,setIsLoading] = useState(false)
    const [users,setUsers] = useState([]);
    const [user,setUser] = useState([])
    const [isAdmin,setIsAdmin] = useState(false)
    const [isEdited,setIsEdited] = useState(false)
    const [isLogin,setIsLogin] = useState(false)
    const [editUser,setEditUser] = useState()
    const [id, setId] = useState('')
    const fetchUsers = async (url)=>{
        setIsLoading(true)
        try{
            const response = await axios.get(url)
            const users = await response.data
            setIsLoading(false)
            setUsers(users)
        }catch(err){
            console.log(err);
        }
    }

       
    const fetchSingleUser = async (url)=>{
        setIsLoading(true)
        try{
            const response = await axios.get(url)
            const user = await response.data
            setIsLoading(false)
            setUser(user)
        }catch(err){
            console.log(err);
        }
    }


useEffect(()=>{
    fetchUsers('api/v1/user')
   
},[])

useEffect(()=>{
    fetchSingleUser(`api/v1/user/${id}`)
   
},[isEdited])
useEffect(()=>{
    
    fetchSingleUser(`api/v1/user/${id}`)
},[])

    
    return(
        <UserContext.Provider 
        value={{fetchUsers,users,isLoading,isLogin,setIsLogin,id,setId,editUser,setEditUser,isAdmin,setIsAdmin,fetchSingleUser,setIsEdited,user}}
        >
        {children}
        </UserContext.Provider>
        )
        
    }

    
export const useUserContext = () => {
    return useContext(UserContext)
  }