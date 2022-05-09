import { useEffect, useState } from "react";

const useManages=()=>{
    const [manages,setManages]=useState([]);
    useEffect(()=>{
        fetch('https://ancient-plains-18330.herokuapp.com/manage')
        .then(res=>res.json())
        .then(data=>setManages(data))
    },[]);
    return [manages,setManages]
}

export default useManages;