import { useState ,useEffect} from "react";
import {useNavigate} from "react-router"

function Users(){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        let usersList = localStorage.getItem('users')

    if (usersList) {
        let usersArray = JSON.parse(usersList)
        setUsers(usersArray)   
       }
    },[])
      
    const navigate= useNavigate()

    return(
        <div className="main">
            <h1>   Users</h1>
            
            {users.map((item,index)=>{return(
            <button onClick={(e)=>navigate('/users/id')} style={{width:'80%',padding:'10px',cursor:'pointer'}}
             key={index}>{item.userFirstname} {item.userLastname}</button>)})}
            
        </div>
    )
}export default Users;