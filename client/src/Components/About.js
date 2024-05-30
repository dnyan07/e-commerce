import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-stone-900 underline flex justify-center'>Contact Us </h1>
      <div className='flex justify-center m-4 p-4'>
       <form >
        <label>FirstName : 
          <input className="bg-stone-500 border-stone-800 text-stone-200 m-2 p-2" type='text'/>
        </label>
        <label>LastName : 
          <input className="bg-stone-500 border-stone-800 text-stone-200 m-2 p-2" type='text'/>
        </label>
        <label>Email : 
          <input className="bg-stone-500 border-stone-800 text-stone-200 m-2 p-2" type='text'/>
        </label>
        <button className='bg-green-500 m-2 p-2 text-black font-bold rounded'>Submit</button>
       </form>
      </div>
    </div>
  )
}

export default About
