import axios from "axios"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Ct from "./Ct";

function Dcard(props)
{
   
    let obj=useContext(Ct)
    let n=useNavigate()
    useEffect(()=>
    {
        if(obj.cont.token==undefined)
        {
            n("/")
        }

    },[])
    
    let data=props.resData
    return(<div className="dc">
        <div>Name:{data.name}</div>
        <div>Contact : {data.mobile} </div>
        <div><button onClick={null}>Contact</button></div>
    </div>)
}
export default Dcard