function Lcard(props)
{
    let data=props.resData;
    let r=data.date;
    r=r.split('-')
    let d=new Date();
    let v=d.toLocaleDateString().split("/");
    let y=[]
    y.push(r[1])
    y.push(r[2])
    y.push(r[0])
    let c=0;
    if(y[0]<v[0] || y[1]<v[1] || y[2]<v[2])
    {
        c++;
    }
    return(<div>
        {c==0 && <div className="lcard"  >
        <div>Drive-id : {data._id}</div>
        <div>Date: {data.date}</div>
        <div>Location : {data.place}  </div>
        <div>Timings : 9:00 AM to 4:00 PM</div>
       
    </div>}
    {c!=0 &&<div className="lcard" id="n"  >
        <div>Drive-id : {data._id}</div>
        <div>Date: {data.date}</div>
        <div>Location : {data.place}  </div>
        <div>Timings : 9:00 AM to 4:00 PM</div>
       <div><button>X</button></div>
       
    </div>}
    </div>)
}
export default Lcard