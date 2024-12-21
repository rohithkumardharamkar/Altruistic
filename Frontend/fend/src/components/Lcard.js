import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Ct from "./Ct";
import { url } from "../urls";

function Lcard(props)
{
  let obj=useContext(Ct);    let n=useNavigate();


  useEffect(()=>
    {
      if(obj.cont.token==undefined)
      {
        n("/")
      }
    },[])
        
    let [cc,setC]=useState(0);
    let data=props.resData;
    let r=data.date.split('-');
    let d=new Date();
    let v=d.toLocaleDateString().split("/");
    let res=[]
    if (!data || !data.date) {
      console.error("Invalid data or missing 'date' property");
      return <div>No valid data to display.</div>; // Fallback UI
    }

    let c=0;
    res.push(v[2]);
    res.push(v[0])
    res.push(v[1]);
   
    
  
  if(r[1]>=res[1] && r[0]>=res[0] )
  {
   c=0 
   let b=  r[2]-res[2];

    if(b<0)
    {
        c++
    }
    
    
     
  }
  else{
    c++;
  }
  let b=0;
   function fun()
   {
    axios.delete(`${url}/drives/deldrive/${data._id}`);
   setC((cc)=>cc+1)
   }
   if(b>0)
   {
    return(<div>

    </div>)
   }
   
   
   
    
    
    
  

   
    return(<div>
        {cc==0 && 
        <div>
        {c==0 && <div className="lcard"  >
        <div>Drive-id : {data._id}</div>
        <div>Date: {data.date}</div>
        <div>Location : {data.place}  </div>
        <div>Timings : 9:00 AM to 4:00 PM</div>
        <div><button disabled>X</button></div>
       
    </div>}
    {c!=0 &&<div className="lcard" id="n"  >
        <div>Drive-id : {data._id}</div>
        <div>Date: {data.date}</div>
        <div>Location : {data.place}  </div>
        <div>Timings : 9:00 AM to 4:00 PM</div>
       <div><button onClick={fun}>X</button></div>
       
    </div>}
    </div>}
        
    </div>)
}
export default Lcard