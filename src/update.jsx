import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Update = () => {
    const[id,setid]=useState(0)
    const[name,setname]=useState("")
    const[email,setemail]=useState(" ")
const navigate=useNavigate()
    useEffect(()=>{
        setid(localStorage.getItem("id"))
        setname(localStorage.getItem("name"))
        setemail(localStorage.getItem("email"))
    },[])
const handleUpdate=(e)=>{
    e.preventDefault()
    axios.put(`https://6436a5228205915d34f90c10.mockapi.io/crudproject/${id}`
    ,{
        name: name,
        email:email
    })
    .then(()=>{
        navigate('/read')
    })
}

  return (
    <>
         <div style={{width:"80%",border:"2px solid ",marginLeft:"100px",marginTop:"100px",padding:"20px"}}>
    <h2> update</h2>
        <form  >
  <div className="mt-3" >
    <label className="form-label">Name</label>
    <input type="text" className="form-control" 
     onChange={(e)=>setname(e.target.value)} 
value={name}
     />
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="text" className="form-control" 
     onChange={(e)=>setemail(e.target.value)}
value={email}
     />
  </div>
  
  <button type="submit" className="btn btn-primary mx-2" style={{marginLeft:"500px"}} 
   onClick={handleUpdate} 
   >update</button>
   <Link to="/read">
   <button className='btn btn-secondary'>back</button>
   </Link>
</form>
</div>
    </>
  )
}

export default Update