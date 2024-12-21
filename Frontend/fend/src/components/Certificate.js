import { useContext, useEffect } from "react";
import Ct from "./Ct";
import { useNavigate } from "react-router";

function Certificate(props) {
    let r=props.resData;
    function p()
    {
        window.print()
    }

    
    
    return (<div className="cer">
        <div className="cer1">
            <div>
                <h1>Certificate of Appriciation</h1>
            </div>
            <div>
                <p>This is to officially recognize and express heartfelt gratitude to <br/>

                    <b>{r.name +" "}</b>

                      for their generous and selfless act of donating  of blood on <b>{r.date}</b> at <b>{r.address}</b>.

                    <br/>Your invaluable contribution has the potential to save lives, and your commitment to helping others is an inspiration to us all. Blood donation is a noble act that reflects compassion, and your generosity truly makes a difference in the lives of those in need.

                    <br/>  We thank you for your kindness and wish you continued good health. Your contribution is deeply appreciated, and we are proud to count you as a vital part of this life-saving cause.

                </p>
            </div>
            <div id="d">
                <div>Date :{r.date}</div>
                <div><b>Dharamacar Rohith Kumar</b> </div>
            </div>
        </div>


        <button onClick={p}>print</button>


    </div>)
}
export default Certificate