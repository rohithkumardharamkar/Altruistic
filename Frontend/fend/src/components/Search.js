import axios from "axios";
import {  useRef, useState } from "react"
import Dcard from "./Dcard";
import Donars from "./Donars";
import { useNavigate } from "react-router";


function Search()
{
    let textref=useRef("");
    let [res,setRes]=useState([]);
    let nav=useNavigate()

  
    let tref=useRef("");
   
    function fun()
    { 
        axios.get(`http://localhost:5000/city/${textref.current.value}`).then((res)=>
            {
                setRes(res.data)
                
            })
    }
    function fun1()
    { 
        axios.get(`http://localhost:5000/group/${tref.current.value}`).then((res)=>
            {
                setRes([])
                setRes(res.data)
                
            })
    }
    console.log(res);
    function fun2()
    {
        nav("/users")
    }
    let [data,setData]=useState("")
    function fun(e)
    {
    }
    
    
   
    
    
   
    return(<div>
        <div className="scon">
        <div>
           <input type="text" placeholder="Search by city" ref={textref} required />
           <p>Or</p>
           <select name="city" value={data.place } onChange={fun}>
            <option disabled selected>----Select your City----</option>
            <option>Hyderabad</option>
            <option>Secundrabad</option>
            <option>Warangal</option>
            <option>Chennai </option>
            <option>Bengalore</option>
            <option>Mysore </option>
        </select>
           <button onClick={fun}>Get Data</button>
        </div>
        <div>
           <input type="text" placeholder="Search by group" ref={tref} required />
           <p>Or</p>
           <select name="group" value={data.group} onChange={fun}>
            <option disabled selected>----Select your Blood Group----</option>
            <option>A+</option>
            <option>B+</option>
            <option>A-</option>
            <option>B-</option>
            <option>O</option>
            <option>O+</option>
        </select>
           <button onClick={fun1}>Get Data</button>
        </div>
        <button onClick={fun2}>All Donars</button>
      
    </div>
    <div className="v">
       {
        res.map((el)=><Dcard resData={el}/>)
       }
    </div>
  
    </div>)

}
export default Search