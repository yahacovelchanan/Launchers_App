import React, { useEffect, useState } from 'react'
import { getAllLaunchers } from '../api/api'

export default function HomePage() {
    const [data,setData]=useState([])
    useEffect(()=>{
        getAllLaunchers()
        .then(getAllLaunchers=>{
            setData(getAllLaunchers)})
        
        
    },[])
  return (
    <div className='overflow-x-auto p-4'>
    <h1 className='text-4xl font-bold mb-4'>Launchers Table</h1>
    <table className='min-w-[70%] ml-25 table-auto  border-2 border-green-800' >
        <thead >
            <tr>
                <th className='px-4 py-2 text-left bg-yellow-400'>name</th>
                <th className='px-4 py-2 text-left bg-yellow-400'>rocketType</th>
                <th className='px-4 py-2 text-left bg-yellow-400'>latitude</th>
                <th className='px-4 py-2 text-left bg-yellow-400'>longitude</th>
                <th className='px-4 py-2 text-left bg-yellow-400'>city</th>
            </tr>
        </thead>
        <tbody>
            {data.map(item=>(
                <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.rocketType}</td>
                <td>{item.latitude}</td>
                <td>{item.longitude}</td>
                <td>{item.city}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}
