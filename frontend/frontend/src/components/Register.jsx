import { useState } from "react"

const Register=()=>{
      const [name,setname]=useState('')
      const [email,setemail]=useState('')
      const [pass,setpass]=useState('')
      const [age,setage]=useState('')

      const handlesubmit=()=>{
            const payload={
                  name,
                  email,
                  pass,
                  age
            }

            fetch("http://localhost:8080/users/register",{
                  method:"POST",
                  body:JSON.stringify(payload),
                  headers:{
                        "Contetent-type":"application/json"
                  }
            }).then(res=>res.json())
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
          
      }
      
      return(
            <div >
                 <h6> Register Page</h6>
                 <input type='text' placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)}/>
                 <input type='text' placeholder="Enter Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                 <input type='password' placeholder="Enter Password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
                 <input type='text' placeholder="Enter age" value={age} onChange={(e)=>setage(e.target.value)}/>
                 <button onClick={handlesubmit}>Submit</button>
            </div>
      )
}

export default Register