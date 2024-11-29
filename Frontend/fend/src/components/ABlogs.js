import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import Ct from "./Ct"

function ABlog()
{
    let obj=useContext(Ct)
    let navigate=useNavigate()
    let [err,setErr]=useState("")
    let [data,setData]=useState({"title":"","descp":"","bpic":"","name":""})
    function fun(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }
    data={...data,"name":obj.cont.name}
    function blog()
    {
        
        axios.post("http://localhost:5000/blogs/addblog",data).then((res)=>
        {
            setErr(res.data)
            if(res.data.msg=="Blog Added")
            {
                
                setTimeout(()=>
                {
                    navigate("/blogs")

                },2000)
               
            }
        })
    }
    return(<div id="c">
        <div className="contain">
            <h4>ADD BLOG</h4>
            <input type='text' placeholder="Enter title" name="title" value={data.title} onChange={fun}/>
          <textarea  name="descp" value={data.descp} onChange={fun} placeholder="Description"></textarea>
            <input type="file" />
            <button onClick={blog}> Add Blog</button>
            <div>{err.msg}</div>
        </div>
    
</div>)
}
export default ABlog