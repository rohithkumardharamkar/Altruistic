import axios from "axios"
import { useEffect, useState } from "react"
import Person from "./Person"

function Donars()
{
    let [data,setData]=useState([])
    useEffect(()=>
    {
        axios.get(" http://localhost:5000/all").then((res)=>
            {
                setData(res.data)
            })
    },[])
    console.log(data);
    
   
    
  
    
    return(<div className="db">
        {
            data.map((el)=><Person resData={el}/>)
        }

    </div>)
}
export default Donars