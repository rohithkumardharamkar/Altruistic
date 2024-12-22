import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/saveSlice";
import Chart from "./Chart";
import Chart2 from "./Cart2";
import Certificate from "./Certificate";
import Gencer from "./GenCer";
import { useNavigate } from "react-router";
import Ct from "./Ct";
import { url } from "../urls";

function Save() {
    let u = useSelector((store) => store.save.items);
    let [data, setData] = useState(u);
    let nav=useNavigate()
    let d = useDispatch();
    let obj=useContext(Ct)
    useEffect(()=>
    {
        if(obj.cont.token==undefined)
        {
            nav("/")
        }
    },[])
    function fun() {
        d(clearItems());
    }
    function a()
    {
        nav("/gencertificate")
    }
    return (
        <div>
            {u.length != 0 && <button onClick={fun}>Clear All</button>}
            {u.length == 0 && <h4>No Profiles Saved</h4>}
           <div id="b">
           {u.map((el) => {
                return (
                    <div className="card" key={el.id}>
                        <div>
                            <img src={`${url}/images/${el.photo}`} alt="" />
                        </div>
                        <div className="cardcon">
                            <div>Name: {el.name}</div>
                            <div>DATE OF BIRTH: {el.dob}</div>
                            <div>PLACE: {el.place}</div>
                            <div>GENDER: {el.gender}</div>
                            <div>BLOOD GROUP: {el.group}</div>
                            <div>MOBILE: {el.mobile}</div>
                            <div>EMAIL: {el.email}</div>
                        </div>
                    </div>
                );
            })}

           </div>
            <div className="chart">
                <div>
                    <h3>Analysis by  Blood Group</h3>
                    <Chart />
                </div>
                <div>
                    <h3>Analysis by Gender</h3>
                    <Chart2 />
                </div>
            </div>
        
            <button onClick={a} id="cert">Genrate Certoficate </button>
        </div>
    );
}

export default Save;
