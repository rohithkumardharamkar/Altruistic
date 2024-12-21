import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Ct from "./Ct";
import { useNavigate } from "react-router";
import { url } from "../urls";

function Drive() {
    let [data, setData] = useState({});
    let obj=useContext(Ct)
    let n=useNavigate();
    useEffect(()=>
    {

        if(obj.cont.token==undefined)
        {
            n("/")
        }
    },[])

    function fun(e) {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    data={...data,"name":obj.cont.name}
    let [err, setErr] = useState("")
    function add() {
        axios.post(`${url}/drives/adddrive`, data,{headers: {"Authorization": obj.cont.token }}).then((res) => {
            setErr(res.data)
           
           

        })
    }
    return (<div className="drivecon">
        <input type='text' placeholder="Drive Id" name="_id" value={data._id} onChange={fun} />
        <input type="date" name="date" value={data.date} onChange={fun} />
        <input type='text' placeholder="Enter Address" name="place" value={data.place} onChange={fun} />
        <button onClick={add}>Add Drive</button>
       
        
        <div>{err.msg}</div>

    </div>)
}
export default Drive;