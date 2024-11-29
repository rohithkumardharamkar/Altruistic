import { useContext, useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router';
import Ct from './Ct';
import { Link } from 'react-router-dom';

function Login()
{
    let navigate=useNavigate()
    let [data,setData]=useState({"_id":"","pwd":""});
    let [err,setErr]=useState("")
    let obj=useContext(Ct)
    function fun(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }
    function login()
    {
        console.log(data);
        
        axios.post("http://localhost:5000/login",data).then((res)=>
        {
           
    
            obj.updcont(res.data)
          
           
         
        
           if(res.data.token)
           {
            navigate("/home");
            console.log("login");
            
           
           
            
           }
           else
           {
            setErr(res.data)
            console.log(res.data);
            
           }
        })
    }

    return(<div className="login">
        <div className="logincon">
            <div><h1>Login</h1></div>
            <input type='text' placeholder='Enter eamil' onChange={fun} name="_id" value={data._id}/>
            <input type='password' placeholder='enter password' onChange={fun} name='pwd' value={data.pwd} />
            <button onClick={login}>Login</button>
            
            <Link to='/reg'>New User? Register now </Link>
            <div>{err.msg}</div>
        </div>
    </div>)
}
export default Login