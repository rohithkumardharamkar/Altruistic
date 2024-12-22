import { useNavigate } from 'react-router'
import '../App.css'
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Ct from './Ct';
function Reg()
{
    let navigate=useNavigate();
    
    let [err,setErr]=useState("")
    let [data,setData]=useState({"_id":"","pwd":"","name":""})
    let obj=useContext(Ct)
   
    
    function fun(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }

 
    function fun1()
    {
        navigate("/profile")
    }

    
    return(<div className="reg">

        <div className="regcon">
            <div><h1>Update Profile</h1></div>
        <input type='text'  placeholder='Enter Name' name='name' value={data.name} onChange={fun}/>
        <input type='password' placeholder='Enter password' name='pwd' value={data.pwd} onChange={fun}/>
        <input type='text' placeholder='Enter Mobile Number' name='mobile' value={data.mobile} onChange={fun}/>
        <input type='date' name="dob" value={data.dob} onChange={fun}/>
       
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
        
      </div>
      <div >
      <label>Upload Image:</label>
      <input type='file'/>
      </div>
     
        
        <button onClick={fun1}>Update</button>
       
        </div>
    </div>)
}
export default Reg