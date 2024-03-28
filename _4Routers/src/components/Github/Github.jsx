import React, { useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom'

function Github()
{
    const demo=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/pratikshabhabad')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return(
{/* <div className="text-center m-4 bg-gray-600 text-white p-4 text-4xl"> Github Followers :{data.followers}
<img src={data.avatar_url} alt="Git pic" width={300}></img> </div> */},

<div className="text-center m-4 bg-gray-600 text-white p-4 text-4xl"> Github Followers :{demo.followers}
<img src={demo.avatar_url} alt="Git pic" width={300}></img> </div>
    ) 
}

export default Github

export const githubLoader=async ()=>{
   const response= await fetch("https://api.github.com/users/pratikshabhabad")

   return response.json();
}