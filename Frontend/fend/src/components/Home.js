import { Link, useNavigate } from "react-router-dom"
import Carosal from "./Corosal"
import Footer from "./Footer"
import Accrdian from "./Accordian"
import Person from "./Person"
import Exam from "./Exam"
import { useContext, useEffect } from "react"
import Ct from "./Ct"

function Home()
{
    
    return(<div>
        <Carosal/>
        <Accrdian/>
        <Link to='/aisearch'><button className="donationss">Ai Support</button></Link>
        <Footer/>
    </div>)

}
export default Home