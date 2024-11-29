import axios from "axios";
import { useContext, useState } from "react";
import Ct from "./Ct";

function Drive() {
    let [data, setData] = useState({});
    let obj=useContext(Ct)

    function fun(e) {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    data={...data,"name":obj.cont.name}
    let [err, setErr] = useState("")
    function add() {
        axios.post("http://localhost:5000/drives/adddrive", data).then((res) => {
            setErr(res.data)
           

        })
    }
    
    return (<div>
        <input type='text' placeholder="Drive Id" name="_id" value={data._id} onChange={fun} />
        <input type="date" name="date" value={data.date} onChange={fun} />
        <input type='text' placeholder="Enter Address" name="place" value={data.place} onChange={fun} />
        <button onClick={add}>Add Drive</button>
       
        
        <div>{err.msg}</div>

    </div>)
}
export default Drive;