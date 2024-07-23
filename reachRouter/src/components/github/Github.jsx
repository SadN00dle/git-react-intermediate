import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/SadN00dle')
    //     .then((res)=> res.json())
    //     .then((data)=>{
            
    //         setData(data)
    //     })
    // })

  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="GitHub profile image" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/SadN00dle')
  return response.json()
}
