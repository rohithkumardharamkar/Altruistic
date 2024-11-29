import { useContext } from 'react'
import '../App.css'
import Ct from './Ct'

function Person(props)
{
   
    let data=props.resData
    console.log(data);
    


    return(<div className='card'>
        <div><img src='data:image/webp;base64,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' alt=''/></div>
        <div className='cardcon'>
            <div>Name : {data.name}</div>
            <div>DATE OF BIRTH : {data.dob}</div>
            <div>PLACE : {data.place}</div>
            <div>GENDER : {data.gender}</div>
            <div>BLOOD GROUP :{data.group}</div>
            <div>MOBILE : {data.mobile}</div>
            <div>EMAIL : {data.email}</div>
            <button>Contact</button>
            
        </div>

    </div>)

}
export default Person