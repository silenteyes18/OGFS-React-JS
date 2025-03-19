import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {

    const data = useLoaderData();

    // const [data, setData] = useState({});
    // useEffect(() => {
        
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=> res.json())
    //     .then(
    //         (newRes) => {
    //             console.log(newRes); 
    //             setData(newRes)});
    // },[])
  return (
    <div className='py-16 bg-gray-900 flex justify-center items-center text-2xl font-sans font-bold text-white'>
      GitHub Name: {data.name}  <br/>  
      Followers: {data.followers}
    </div>
  )
}

export default GitHub

export const genGithubLoadder = async () => {
    const result = await fetch('https://api.github.com/users/hiteshchoudhary')
    return result.json();
}