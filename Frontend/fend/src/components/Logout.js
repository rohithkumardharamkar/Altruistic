import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import {useNavigate} from 'react-router-dom'
const Logout = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>
{
  if(obj.cont.token==undefined)
  {
    navigate("/")
  }
  obj.updcont({"_id":"","token":"","name":"","role":""})
  navigate("/")
},[])
  return (
    <div></div>
  )
}
export default Logout