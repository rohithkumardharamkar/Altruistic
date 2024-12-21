import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Ct from "./Ct"
import Lcard from "./Lcard"
import { url } from "../urls"

function Drives() {
    let [d, setDrives] = useState([])
    let n=useNavigate()
    let obj=useContext(Ct)
    useEffect(() => {
        if(obj.cont.token==undefined)
        {
            n("/")
        }

        axios.get(`${url}/drives/getdrive`).then((res) => {
            setDrives(res.data)
        })

    }, [])
    
    function del()
    {
        setDrives([])
        axios.delete(`${url}/drives/clearDrives`,{headers: {"Authorization": obj.cont.token }}).then((res) => {
            
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