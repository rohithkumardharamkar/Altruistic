function Dcard(props)
{
    let data=props.resData
    return(<div className="dc">
        <div>Name:{data.name}</div>
        <div>Contact : {data.mobile} </div>
    </div>)
}
export default Dcard