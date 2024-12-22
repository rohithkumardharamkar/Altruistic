import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Ct from "./Ct"
import { useNavigate } from "react-router";
import { url } from "../urls";

function Bcard(props)
{
    let data=props.resData
    let [c,setC]=useState(0)
    let obj=useContext(Ct)

   
  let nav=useNavigate()
  useEffect(()=>
  {
    if(obj.cont.token==undefined)
    {
      nav("/")
    }
  },[])
    function del()
    {
        axios.delete(`${url}/blogs/del/${data._id}`, {
            headers: {
                "Authorization": obj.cont.token
            }
        });
               
        setC((c)=>c+1)
    }
    if(c>0)
    {
        // console.log(c);
        
    }
    
    return(<div>
        {c==0 ?
            <div className="bcard">
            <div id="hi">{data.name}----{data.title}</div>
    
            <div className="bc">
                <img src={`${url}/images/${data.bpic}`}/>
                <div id="y">{data.descp}</div>
                <div><button onClick={del}>X</button></div>
    
            </div>
    
        </div>:<div></div>
        }
    </div>)

}
export let Ccard=(Bcard)=>
{
    
    return (props)=>
    {
        return(<div className="dit">
            <label>Admin</label>
            <Bcard {...props}/>
        </div>)
    }
}
export default Bcard