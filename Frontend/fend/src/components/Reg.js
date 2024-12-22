import { useNavigate } from 'react-router'
import '../App.css'
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Ct from './Ct';
import { url } from '../urls';
function Reg() {
    let navigate = useNavigate()
    let [err, setErr] = useState("")
    let [data, setData] = useState({ "_id": "",  "name":"","age":"","email":"", "photo": "" })
    let [f, setF] = useState("");
    let [c,setC]=useState(0);
    function fun(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    function fun2(e) {
        setData({ ...data, "photo": e.target.files[0] })
    }

    function reg() {
        setErr("")
       

        try
        {
            let d = new FormData()
            for (let el in data) {
                d.append(el, data[el])
            }
            axios.post(`${url}/reg`, d).then((res) => {
                
                if (res.data.msg == "Accout is created") {
                   setTimeout(() => {
                    navigate("/")
                    
                   }, 3000);
                  
    
                }
                else {
    
    
                    setErr(res.data)
                }
            }).catch((err)=>
            {
                console.log(err);
                
            })
    
            

        }
        catch(err)
        {
            console.log(err);
            

        }
       
    }
    return (<div className="reg">
        <div className="regcon">
            <div><h1>Registration</h1></div>
            <input type='text' placeholder='Enter uid Number' name="_id" value={data._id} onChange={fun} />
            <input type='text' placeholder='Enter Name' name='name' value={data.name} onChange={fun} />
            <input type='email' placeholder='Enter Email' name='email' value={data.email} onChange={fun} />
            <input type='password' placeholder='Enter password' name='pwd' value={data.pwd} onChange={fun} />
            <input type='text' placeholder='Enter Mobile Number' name='mobile' value={data.mobile} onChange={fun} />
            <input type='date' name="dob" value={data.dob} onChange={fun} />
            <div>
                <label>Role : </label>
                <select name='role' value={data.role} onChange={fun}>
                    <option disabled selected>--Select--</option>
                    <option>Admin</option>
                    <option>User</option>
                </select>
                <label>Blood Group : </label>
                <select name='group' value={data.group} onChange={fun}>
                    <option disabled selected>--Select --</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>A-</option>
                    <option>B-</option>
                    <option>O</option>
                    <option>O+</option>
                </select>
            </div>

            <div>
                <label>City : </label>
                <select name='add' value={data.add} onChange={fun}>
                    <option disabled selected>----Select your City----</option>
                    <option>Hyderabad</option>
                    <option>Secundrabad</option>
                    <option>Warangal</option>
                    <option>Chennai </option>
                    <option>Bengalore</option>
                    <option>Mysore </option>
                </select>
                <label>Gender : </label>
                <select name='gender' value={data.gender} onChange={fun}>
                    <option disabled selected>-Select-</option>

                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div >
                <label>Upload Image:</label>
                <input type='file' onChange={fun2} />

            </div>
            <button onClick={reg}>Register</button>
            <div>{err.msg}</div>
            <div>Already Registered?  <Link to='/'> Sign in Now</Link></div>
           
        </div>
    </div>)
}
export default Reg