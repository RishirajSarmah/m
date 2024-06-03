import React, { useState } from "react";
import axios from "axios";
function SignUp() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const postRequest = async (e) =>{
           e.preventDefault();
        try {
           const post=await axios.post("http://localhost:5000/cinephile/account/registration",JSON.stringify({name,email,password}))
           console.log(post)
           
        }
        
        catch (error) {
            console.log(error.response);
        }
    }
   
    
    
    return ( 
<>
<div className="container p-3 mb-3 bg-secondary text-white">
<h1 className="text-center">JOIN CINEPHILE</h1>

<form onSubmit={postRequest}>
<h3>Username</h3>
<input className="form-control" type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" placeholder="Please enter your name" required></input>
<h3>Email Address</h3>
<input className="form-control" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Please enter your email" required></input>
<h3>Password</h3>
<input className="form-control" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="at least 6 characters" required></input>
<button className=" mt-3 btn btn-primary" type="submit">Create your Cinephile account</button>
</form>




</div> 

</>
     );
}


export default SignUp;





 
