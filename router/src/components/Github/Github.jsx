import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Amir-tech-it')
    //     .then(response => response.json()) 
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    return (
        <>
        <div className='text-center m-4 bg-gray-600'>
            <h1 className='text-3xl font-bold text-white'>Github followers:{data.followers}</h1>
            <img src={data.avatar_url} alt=""  width={"100px"}/>
        </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async function(){
    const response = await  fetch('https://api.github.com/users/Amir-tech-it')
    return response.json()
 
}