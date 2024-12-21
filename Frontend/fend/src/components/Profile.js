import { useContext, useEffect } from "react"
import Ct from "./Ct"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { url } from "../urls"
function Profile()
{
    let obj=useContext(Ct)
    let navigate=useNavigate()
    useEffect(()=>
    {
        if(obj.cont.token==undefined)
        {
            navigate("/")
        }
    })
    function del()
    {
        axios.delete(`${url}/delact/${obj.cont._id}`,{headers: {"Authorization": obj.cont.token }}).then((res)=>
        {
            console.log("deleted");
            obj.updcont({"_id":"","token":"","name":"","role":""})
            navigate("/")
            
        })
    }
    
    console.log(obj.cont,"llll");
    return(<div className="profile">
        <h1><b>My Profile</b></h1>
        <img src={`${url}/images/${obj.cont.photo}`} alt="" className="nimg"/>
        <div><b>Name</b> : {obj.cont._id}</div>
            <div><b>DATE OF BIRTH</b> : {obj.cont.dob}</div>
            <div><b>PLACE</b> : {obj.cont.add}</div>
            <div><b>GENDER</b> :{obj.cont.gender}</div>
            <div><b>BLOOD GROUP</b> : {obj.cont.group}</div>
            <div><b>MOBILE</b> : {obj.cont.mobile}</div>
            <div><b>EMAIL</b> : {obj.cont.email}</div>
            <Link to='/update'><button>Update Profile</button></Link>
            <button onClick={del}>Delete My Account</button>    
        </div>)
}
export default Profile