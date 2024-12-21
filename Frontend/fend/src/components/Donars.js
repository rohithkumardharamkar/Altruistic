import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Person from "./Person"
import { useSelector } from "react-redux"
import Ct from "./Ct"
import { useNavigate } from "react-router"
import { url } from "../urls"
function Donars() {
    let obj=useContext(Ct)
    let [data, setData] = useState([]);
    let n=useNavigate()
    useEffect(() => {

        if(obj.cont.token==undefined)
        {
            n("/")
        }
        axios.get(`${url}/all`,{headers: {"Authorization": obj.cont.token }}).then((res) => {
            setData(res.data)
        })
    }, [])
    console.log(data);
    
    let u = useSelector((store) => store.save.items)
    return (<div className="db">
        {
            data.map((el) => {
                return (<div><Person resData={el} />{console.log(el + "lllll")
                }</div>)
            })
        }

    </div>)
}
export default Donars