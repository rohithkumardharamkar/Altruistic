import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts';
import Ct from './Ct';
import { useNavigate } from 'react-router';
import { url } from '../urls';
function Chart()
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
        axios.get(`${url}/filter`,{
            headers: {
                "Authorization": obj.cont.role
            }
        }).then((res)=>{
            setData(res.data)
        }).catch((err)=>
        {
            console.log(err);
            
        })
        

    },[])
    console.log(data);  
                               
    return(<div> 
        
        <BarChart width={800} height={500} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="_id" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="total" fill="#8884d8" />
</BarChart>
    </div>)
}
export default Chart