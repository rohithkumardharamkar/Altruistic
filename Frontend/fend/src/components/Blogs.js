import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Bcard ,{Ccard} from "./Bcard";
import Ct from "./Ct";
import { url } from "../urls";

function Blogs() {
    let wrapp=Ccard(Bcard)
    let obj=useContext(Ct)
    let [data, setData] = useState([])
    let n=useNavigate()
    let fetch = () => {
        axios.get(`${url}/blogs/getblogs`,{headers: {"Authorization": obj.cont.token }}).then((res) => {
            setData([...data, res.data])
        })
        
    } 
    useEffect(() => {
        if(obj.cont.token==undefined)
        {
            n("/")
        }
        
        fetch()

    }, [])
    function del() {
        console.log("deleted");
        axios.delete(`${url}/blogs/delblogs`,{headers: {"Authorization": obj.cont.token }}).then((res) => {
            setData([])
        })
    }
    if (data.length == 0) {
        return (<div>Loading.......</div>)
    }
    { data.length == 0 && <div>No Blogs Add Blogs and share your Thoughts</div> }
    
    return (<div>
        {
            data[0].map((el) => <Bcard resData={el} />)

        }
        <Link to='/ablogs'> <button className="addblog">Add Blog</button></Link>
        {data[0].length != 0 && <div><button onClick={del}>Delete All</button></div>}
    </div>)

}
export default Blogs