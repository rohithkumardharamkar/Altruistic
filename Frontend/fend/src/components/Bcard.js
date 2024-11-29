import axios from "axios";
import { useState } from "react";

function Bcard(props)
{
    let data=props.resData
    let [c,setC]=useState(0)
    function del()
    {
        axios.delete(`http://localhost:5000/blogs/del/${data._id}`);
       
        setC((c)=>c+1)
    }
    if(c>0)
    {
        console.log(c);
        
    }
    return(<div>
        {c==0 ?
            <div className="bcard">
            <div id="hi">{data.name}----{data.title}</div>
    
            <div className="bc">
                <img src="data:image/jpeg;base64,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"/>
                <div id="y">{data._id}</div>
                <div><button onClick={del}>X</button></div>
    
            </div>
    
        </div>:<div></div>
        }
    </div>)

}
export default Bcard