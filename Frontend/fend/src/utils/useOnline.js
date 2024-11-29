import { useEffect, useState } from "react"

function useOnline()
{
    let [online,setOnline]=useState(true);
    useEffect(()=>
    {

        window.addEventListener("offline",()=>
        {
            setOnline(false)
        })
        window.addEventListener("online",()=>
        {
            setOnline(true)
        })
        
    },[])
    return online
}
export default useOnline