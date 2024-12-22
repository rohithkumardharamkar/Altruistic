import { useContext, useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router';
import Ct from './Ct';
import { Link } from 'react-router-dom';
import Ai from './Ai';
import { url } from '../urls';

function OLogin() {
    let navigate = useNavigate()
    let [data, setData] = useState({ "_id": "", "pwd": "","email":"" });
    let [err, setErr] = useState("")
    let obj = useContext(Ct)
    let [otp,setOtp]=useState("")
    function fun(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    
    function getotp()
    {
        setErr("")
        let p=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(p.test(data._id))
        {
            axios.post(`${url}/otp`,{"email":data._id}).then((res)=>{
                setOtp(res.data)
                }).catch((err)=>
                {
                    
        
                    
                })

        }
        else
        {

        setErr({"msg":"Invalid email"})
        }

       
    }
   
    
    function login() {
        setErr("")
        if(data.pwd=="" || otp=="")
        {
            setErr({"msg":"All fields are required"})
            console.log();
            
        return
            
        }
        if(data.pwd==otp)
        {
            axios.post(`${url}/otplogin`, {"email":data._id}, { headers: { "Authorization": obj.cont.token } }).then((res) => {
                obj.updcont(res.data)
                if (res.data.token) {
                    navigate("/home");
                    console.log("login");
                }
                else {
                    setErr(res.data)
    
                }
            })
            .catch((err)=>
            {
                
            })
        }
        else{
            setErr({"msg":"Invalid OTP"})
            return
        }

       
    }

    
    
    return (<div className="login">
        <div className="logincon">
            <div><b><h1> Login</h1></b></div>
            <input type='text' placeholder='Enter eamil' onChange={fun} name="_id" value={data._id} />
           { !otp && <button onClick={getotp}>Get OTP</button>}
            <input type='password' placeholder='enter OTP' onChange={fun} name='pwd' value={data.pwd} />
            <div>
            </div>
            <button onClick={login}>Login</button>
            <div>{otp && <h5>OTP Sent</h5>}</div>
            <div><Link to="/">Login with Password</Link></div>

            
            <div>{err.msg}</div>
        </div>
        
    </div>)
}
export default OLogin