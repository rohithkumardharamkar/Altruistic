import { useState } from "react"
import Certificate from "./Certificate";

function Gencer()
{
    let [data,setData]=useState({})
    function fun(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }
    let [r,setR]=useState({})
    let [c,setC]=useState(0);
function a()
{
    setR(data)
    setC((c)=>c+1);
}    

console.log(r);

    return(<div>
      { c==0 &&  <div className="ff">
        <h4>Generate Appreciation Certificate</h4>
        <input type="text" placeholder="Enter Full Name" name="name" value={data.name} onChange={fun}/>
        <input type="text" placeholder="Enter Address" name="address" value={data.address} onChange={fun}/>
        <label><input type="date" name="date" value={data.date} onChange={fun}/></label>
        <button onClick={a}>Generate Certificate</button>
        
    </div>}
    {c!=0 && <Certificate resData={data}/>}
    </div>)
}
export default Gencer