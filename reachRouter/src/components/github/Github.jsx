import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/SadN00dle')
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setData(data)
        })
    })

  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="GitHub profile image" />
    </div>
  )
}

export default Github