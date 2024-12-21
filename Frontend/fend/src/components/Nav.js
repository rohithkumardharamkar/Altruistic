import { Link, useNavigate } from "react-router-dom"
import useOnline from "../utils/useOnline"
import { useContext, useEffect } from "react"
import Ct from "./Ct"
import {useSelector} from 'react-redux';
import { url } from "../urls";

function Nav() {
    let o = useOnline()
    let obj = useContext(Ct)
    let u=useSelector((store)=>store.save.items);
    let nav=useNavigate()

    useEffect(()=>
    {
        if(obj.cont.token==undefined)
        {
            nav("/")
        }
    },[])
    return (<><nav>
        {obj.cont.token && <Link to='/home'>Home</Link>}
        {obj.cont.token && <Link to='/search'>Search</Link>}
        {obj.cont.token && <Link to='/blogs'>Blogs</Link>}
        {obj.cont.token  && <Link to='/drives'>Drives</Link>}
        {obj.cont.token  && <Link to='/profile'>Profile</Link>}
        {obj.cont.token==undefined && <Link to='/'>Login</Link>}
        {obj.cont.token && obj.cont.role=="Admin"  && <Link to='/save'>Saved Profiles -({u.length})</Link>}
        {obj.cont.token  && <Link to='/logout'>Log Out</Link>}
        {obj.cont.token && <div>{o ? `🟢  ${ obj.cont.name.toUpperCase()}`: "🔴"}</div>}
        {obj.cont.token && <div><img src={`${url}/images/${obj.cont.photo}`} alt="" className="nimg"/></div>}
    </nav></>)
}
export default Nav