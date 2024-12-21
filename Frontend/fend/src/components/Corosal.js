import { imgs } from "../utils/img"
import { useContext, useEffect ,useState} from "react"
import Ct from "./Ct";
import { useNavigate } from "react-router";

function Carosal() {
    let [i,setI]=useState(0);
    function fun()
    {
        setI((i)=>(i+1)%imgs.length)
    }
    let obj=useContext(Ct);
    let n=useNavigate()
    useEffect(()=>
    {
        if(obj.cont.token==undefined)
        {
            n("/")
        }
        let rid=setInterval(fun,3000)
        return ()=>{
            clearInterval(rid)
        }
    },[])

    
    function prev()
    {
        setI((i)=>
        {
            if(i==0)
            {
                return imgs.length-1
            }
            else
            {
                return i-1
            }
        })
    }
    function next()
    {
       setI((i+1)%imgs.length);
    }
    return (<div>
        <div className="imgs">
            <img src={imgs[i]} alt='name' />

           <div >
            <button className="btns" onClick={prev}>Previous</button>
            <button className="btnh" onClick={ next}>Next</button>
           </div>
        </div>
    </div>)
}
export default Carosal