import { useContext } from 'react'
import '../App.css'
import Ct from './Ct'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/saveSlice';
import { useNavigate } from 'react-router';
import { url } from '../urls';

function Person(props)
{
   
    let data=props.resData
    let t=useSelector((store)=>store.save.items);
    let obj=useContext(Ct)
    let n=useNavigate()
    if(obj.cont.token==undefined)
    {
        n("/")
    }
   
    function fun()
    {
        axios.get(`${url}/send`,{headers: {"Authorization": obj.cont.email }}).then((res)=>
        {
        }) 
    }
    let dispatch=useDispatch()
    function fun2()
    {
        alert("Profile saved")
        dispatch(addItem(data))
    }

    return(<div className='card'>
        <div><img src={`${url}/images/${data.photo}`} alt=''/></div>
        <div className='cardcon'>
            <div>Name : {data.name}</div>
            <div>DATE OF BIRTH : {data.dob}</div>
            <div>PLACE : {data.place}</div>
            <div>GENDER : {data.gender}</div>
            <div>BLOOD GROUP :{data.group}</div>
            <div>MOBILE : {data.mobile}</div>
            <div>EMAIL : {data.email}</div>
            <div className='f'><button onClick={fun}>Contact</button>
            <button onClick={()=>fun2(data)}>Save Profile</button></div>
        </div>
        </div>)

}
export default Person