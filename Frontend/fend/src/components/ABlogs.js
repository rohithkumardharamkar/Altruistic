import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Ct from "./Ct"
import Bcard ,{Ccard}from "./Bcard"
import { url } from "../urls"


function ABlog()
{
    let obj=useContext(Ct)
    let navigate=useNavigate()
    
    let [err,setErr]=useState("")
    let [data,setData]=useState({"title":"","descp":"","bpic":"","name":""})
    let [e,setE]=useState("");
    function fun(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }
    data={...data,"name":obj.cont.name}
    function fun2(e)
    {
        setData({...data,"bpic":e.target.files[0]});
       
        
    }
    useEffect(()=>
    {
        if(obj.cont.token==undefined)
            {
                navigate("/")
            }
    },[])
    
    function blog()
    {
        console.log(data);
        
        let q=new FormData();
        for(let el in data)
        {
            q.append(el,data[el])
        }
        
        console.log(q);
        
        axios.post(`${url}/blogs/addblog`,q,{headers: {"Authorization": obj.cont.token }}).then((res)=>
        {
            setErr(res.data)
            if(res.data.msg=="Blog Added")
            {
                
                setTimeout(()=>
                {
                    navigate("/blogs")

                },2000)
               
            }
        }).catch((err)=>
        {
            console.log(err);
            setE(err)
            alert("Please Login")
            navigate("/")
        })
    }
    return(<div id="c">
        <div className="contain">
            <h4>ADD BLOG</h4>
            <input type='text' id="ccc" placeholder="Enter title" name="title" value={data.title} onChange={fun}/>
          <textarea  name="descp" value={data.descp} onChange={fun} placeholder="Description"></textarea>
            <input type="file"  onChange={fun2} />
            <button onClick={blog}> Add Blog</button>
            <div>{err.msg}-{e.message}</div>
        </div>
    
</div>)
}
export default ABlog