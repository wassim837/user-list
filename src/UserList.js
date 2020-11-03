import React,{useState,useEffect} from "react";
import axios from "axios";


export function UserList(){
    const [users,setUsers] = useState([])
    const [toggled,toggle] = useState(false)
    useEffect(()=>{ 
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        setUsers(res.data)
    })
    .catch(error => {
        console.log(error);
 })
    },[]);  
    return (   
<div>
<div style={{textAlign:'center'}}>
<button className='btn btn-primary' onClick={()=>toggle(toggled=>!toggled)}>{toggled?"Red less":"Red more"}</button>
</div>
     <ul>
{users.map((user,id)=><li><div key={id}><strong style={{color:'black'}}>Name:</strong><p>{user.name}</p>{toggled && <p><h5>UserName</h5>{user.username}
<h5>Address:</h5>{user.address.street}{user.address.suite}
{user.address.city}<h5>Phone:</h5>{user.phone}<h5>Company:</h5>{user.website}
{user.company.name} </p>}<br/>
    </div></li>)}
    </ul>
    
</div>
         )
}
