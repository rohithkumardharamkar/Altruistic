import axios from "axios";
import {  useContext, useEffect, useRef, useState } from "react"
import Dcard from "./Dcard";
import Donars from "./Donars";
import { useNavigate } from "react-router";
import Ct from "./Ct";
import { url } from "../urls";
function Search()
{
    let textref=useRef("");
    let [res,setRes]=useState([]);
    let nav=useNavigate();
    let [data,setData]=useState("");
    let obj=useContext(Ct)

    let tref=useRef("");
    useEffect(()=>
    {
        if(obj.cont.token==undefined)
        {
            nav("/")
        }

    },[])
    function fun()
    { 
        
        axios.get(`${url}/city/${textref.current.value}`,{headers: {"Authorization": obj.cont.token }}).then((res)=>
            {
                setRes(res.data)
                
            }).catch((err)=>
            {
                console.log("error",err);
                
            })
    };
    function fun1()
    { 
        axios.get(`${url}/group/${tref.current.value}`,{headers: {"Authorization": obj.cont.token }}).then((res)=>
            {
                setRes([])
                setRes(res.data)
                
            })
    };
    console.log(res);
    function fun2()
    {
        nav("/users")
    }
   async function fun3(e)
    {
        console.log(e.target.value);
       await axios.get(`${url}/city/${e.target.value}`,{headers: {"Authorization": obj.cont.token }}).then((res)=>
            {
                setRes(res.data)
            })
    }
    async function fun4(e)
    {
        console.log(e.target.value);
       await axios.get(`${url}/group/${e.target.value}`,{headers: {"Authorization": obj.cont.token }}).then((res)=>
            {
                setRes(res.data)
                
            })
    }
    return(<div>
        <div className="scon">
        <div className="ss">
           <input type="text" placeholder="Search by city" ref={textref} required />
           <button onClick={fun}>Get Data</button>
           <p>Or</p>
           <select name="city" value={data.place } onChange={fun3}>
            <option disabled selected>----Select----</option>
            <option>Hyderabad</option>
            <option>Secundrabad</option>
            <option>Warangal</option>
            <option>Chennai </option>
            <option>Bengalore</option>
            <option>Mysore </option>
        </select>  
        </div>
        <div className="ss">
           <input type="text" placeholder="Search by group" ref={tref} required />
           <button onClick={fun1}>Get Data</button>
           <p>Or</p>
           <select name="group" value={data.group} onChange={fun4}>
            <option disabled selected>----Select ----</option>
            <option>A+</option>
            <option>B+</option>
            <option>A-</option>
            <option>B-</option>
            <option>O</option>
            <option>O+</option>
        </select>
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