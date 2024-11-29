import { useContext } from "react"
import Ct from "./Ct"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
function Profile()
{
    let obj=useContext(Ct)
    let navigate=useNavigate()
    function del()
    {
        axios.delete(`http://localhost:5000/delact/${obj.cont._id}`).then((res)=>
        {
            console.log("deleted");
            obj.updcont({"_id":"","token":"","name":"","role":""})
            navigate("/")
            
        })
    }
    
    console.log(obj.cont,"llll");
    return(<div className="profile">
        <h1>My Profile</h1>
        <img src='' alt=''/>
        <div>Name : {obj.cont._id}</div>
            <div>DATE OF BIRTH : {obj.cont.dob}</div>
            <div>PLACE : {obj.cont.add}</div>
            <div>GENDER :{obj.cont.gender}</div>
            <div>BLOOD GROUP : {obj.cont.group}</div>
            <div>MOBILE : {obj.cont.mobile}</div>
            <div>EMAIL : {obj.cont.email}</div>
            <Link to='/update'><button>Update Profile</button></Link>
            <button onClick={del}>Delete My Account</button>    
        </div>)

}
export default Profile