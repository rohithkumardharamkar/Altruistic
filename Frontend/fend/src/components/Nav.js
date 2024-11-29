import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import { useContext } from "react"
import Ct from "./Ct"

function Nav() {
    let o = useOnline()
    let obj = useContext(Ct)
    return (<nav>
        {obj.cont.token && <Link to='/home'>Home</Link>}
        {obj.cont.token && <Link to='/search'>Search</Link>}
        {obj.cont.token && <Link to='/blogs'>Blogs</Link>}
        {obj.cont.token && <Link to='/quiz'>Quiz</Link>}
        {obj.cont.token  && <Link to='/drives'>Drives</Link>}
        {obj.cont.token  && <Link to='/profile'>Profile</Link>}
        {obj.cont.token==undefined && <Link to='/'>Login</Link>}
        {obj.cont.token  && <Link to='/logout'>Log Out</Link>}
        {obj.cont.token && <div>{o ? `🟢  ${ obj.cont.name.toUpperCase()}`: "🔴"}</div>}
    </nav>)
}
export default Nav