import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Ct from "./Ct"
import Lcard from "./Lcard"

function Drives() {
    let [d, setDrives] = useState([])
    let obj=useContext(Ct)
    useEffect(() => {
        axios.get("http://localhost:5000/drives/getdrive").then((res) => {
            setDrives(res.data)
        })

    }, [])
    function del()
    {
        console.log("hi");
        setDrives([])
        axios.delete("http://localhost:5000/drives/clearDrives").then((res) => {
            console.log("cleared");
            
        })
    }
    
    
    return (<div className="h">
       {obj.cont.role=='Admin' && <div className="ad"><Link to='/addrive'><button>Add Drive</button></Link></div>}
     { d.length!=0 && <div><button onClick={del}>Delete All</button></div>}

       {
        d.map((el)=><Lcard resData={el}/>)
       }

    </div>)

}
export default Drives