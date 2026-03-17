import React from 'react'
import { Link } from 'react-router'

export default function LoginPage() {
  return (
    <div className='flex justify-center mt-20'>
        <main className='h-150 w-100 border-amber-600
        border-2 rounded-2xl bg-amber-300 flex-col'>
           <p className='text-2xl ml-10 mt-40'>enter username end password:</p>
         <input type="text" placeholder="username" className='border h-15 w-80 mt-10 ml-10 rounded-2xl text-3xl hover:bg-amber-200'/>
         <input type="text" placeholder='password' className='border h-15 w-80 mt-10 ml-10 rounded-2xl text-3xl hover:bg-amber-200'/>
         <div className='border bg-amber-600 rounded-2xl text-4xl ml-26 mt-10 h-15 w-50 hover:bg-amber-900 '><Link to='/' className='ml-15 mt-2'>login</Link></div>
        </main>
    </div>
  )
}
