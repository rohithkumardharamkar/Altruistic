import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts';
import Ct from './Ct';
import { useNavigate } from 'react-router';
import { url } from '../urls';
function Chart2()
{
    let [data,setData]=useState([])
    let obj=useContext(Ct)
    let n=useNavigate()
    
    useEffect(()=>
    {
        if(obj.cont.token==undefined)
        {
            n("/")
        }
        axios.get(`${url}/fg`,{headers: {"Authorization": obj.cont.token }}).then((res)=>{
            setData(res.data)
        })
        

    },[])
   
    console.log(data);  
                               
    return(<div> 
        
        <BarChart width={800} height={500} data={data}>
  <CartesianGrid strokeDasharray="2 2" />
  <XAxis dataKey="_id" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="total" fill="#8884d8" />
</BarChart>
    </div>)
}
export default Chart2