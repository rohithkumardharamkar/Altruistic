import { useState } from "react"

function Accrdian()
{
    let data = [
        {
          "heading": "Why is blood donation important for saving lives?",
          "text": "Blood donation helps save lives in emergencies, surgeries, and medical treatments. It ensures that hospitals have a constant supply of blood for patients in need."
        },
        {
          "heading": "How does blood donation help in medical treatments?",
          "text": "Donated blood is vital for patients undergoing surgeries, cancer treatments, and for those with chronic conditions like anemia. It plays a critical role in recovery."
        },
        {
          "heading": "What are the benefits of donating blood regularly?",
          "text": "Regular blood donation helps maintain an adequate blood supply and can lower the risk of certain diseases for the donor, including iron overload."
        },
        {
          "heading": "Who can benefit from blood donation?",
          "text": "Patients suffering from trauma, childbirth complications, surgeries, and illnesses like leukemia benefit greatly from blood donations, improving their chances of survival."
        },
        {
          "heading": "How does blood donation impact the community?",
          "text": "Blood donation strengthens community health systems by ensuring hospitals are stocked with blood for emergencies, contributing to the well-being of the whole population."
        },
        {
          "heading": "What makes blood donation a life-saving act?",
          "text": "Each donation can save multiple lives. With just one blood donation, you can help save up to three people, making it an invaluable act of kindness."
        },
        {
          "heading": "How often can you donate blood?",
          "text": "You can donate blood every 56 days, which helps maintain a steady supply for those in need. Regular donations are essential to ensure hospitals are well-stocked."
        },
        {
          "heading": "Can blood donation prevent shortages during emergencies?",
          "text": "Yes, blood donation helps prevent shortages during emergencies. A constant supply ensures that hospitals have enough blood in case of disasters or unexpected medical situations."
        },
        {
          "heading": "What precautions should be taken before donating blood?",
          "text": "Before donating blood, it's important to be well-hydrated, eat a healthy meal, and avoid strenuous exercise. A quick health check will ensure you're eligible to donate safely."
        },
        {
          "heading": "Is blood donation safe?",
          "text": "Blood donation is a safe procedure. Donors are carefully screened for eligibility, and the process is conducted under hygienic conditions. The risks are minimal and well-managed."
        }
      ];
          let [arr,setArr]=useState([false,false,false,false,false,false,false])
    function show(i)
    {
        arr[i]=true;
        setArr([...arr])

    }
    function hide(i)
    {
        arr[i]=false;
        setArr([...arr])

    }
    return(<div><h1 className="acr">Any Queries ?</h1>
        {
            
            data.map((el,i)=>
            {
                return(<div className="acon">
                   
                    <div className="abox"> 
                    <div className="heading">
                    <h5>{el.heading}</h5>
                  { !arr[i] && <button onClick={()=>show(i)}>show</button>}
                   { arr[i] && <button onClick={()=>hide(i)}>hide</button>}
                    </div>
                 {arr[i] &&   <div className="abody">{el.text}</div>}
                </div>
                </div>)
            })
        }

    </div>)
}
export default Accrdian