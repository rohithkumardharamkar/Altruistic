import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react"
import Ct from "./Ct";
import { useNavigate } from "react-router";
import { url } from "../urls";

function Ai()
{
    let textref=useRef();
    let [data,setData]=useState("");
    let [err,setErr]=useState("");
    let obj=useContext(Ct);
    let n=useNavigate()
    useEffect(()=>
    {
        if(obj.cont.token==undefined)
            {
                n("/")
            }
    },[])
    function fun()
    {
        if(textref.current.value!="")
        {
        axios.post(`${url}/getresult`,{"rdata":textref.current.value}).then((res)=>{
            setData(res.data)
            textref.current.value=""
        }).catch((err)=>
        {
            setErr(err);
        })
    }
    else{
        return
    }
    }
 


    return(<div className="ai">
        <div id="a">
        <input type="text" placeholder="Seach using Gen Ai" ref={textref}/>
        <button onClick={fun}>Generate</button>
        
        </div>
       {data!="" &&  <div className="k">
            {data}
        </div>}
        

    </div>)
}
export default Ai