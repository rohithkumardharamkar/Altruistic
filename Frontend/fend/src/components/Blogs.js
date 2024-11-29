import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Bcard from "./Bcard";

function Blogs()
{
    let [data,setData]=useState([])
    let fetch=()=>
        {
              axios.get("http://localhost:5000/blogs/getblogs").then((res)=>
                    {
                        setData([...data,res.data])
                    })    
        }
    useEffect(()=>
    {
        fetch()

    },[])

    function del()
    {
        console.log("deleted");
       
        
        
        axios.delete("http://localhost:5000/blogs/delblogs").then((res)=>
        {
            setData([])    
         
            
        })
       
      
    }

    

   if(data.length==0)
   {
    return(<div>Loading.......</div>)
   }
  {data.length==0 && <div>No Blogs Add Blogs and share your Thoughts</div>}
    return(<div>
        {
            data[0].map((el)=><Bcard resData={el}/>)
        }

        <Link to='/ablogs'> <button className="addblog">Add Blog</button></Link>
     {data[0].length!=0 &&   <div><button onClick={del}>Delete All</button></div>}

        
      
    </div>)

}
export default Blogs