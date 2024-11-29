import { Link } from "react-router-dom"
import Carosal from "./Corosal"
import Footer from "./Footer"
import Accrdian from "./Accordian"
import Person from "./Person"

function Home()
{
    return(<div>
        <Carosal/>
        <Accrdian/>
        <Link to='/donations'><button className='donations'>Donate Fund</button></Link>
        <Footer/>
       

    </div>)

}
export default Home