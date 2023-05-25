import React from 'react'

function Home() {
  return (
    <div>
      <img className='m-0 p-0 w-screen h-[45rem]' src="/images/1.jpg" alt="" />
      <h1 className='text-4xl my-10 text-slate-700'>About <strong className='text-blue-800'>IIIT UNA</strong></h1>
      <p className='w-2/3 mx-auto text-justify text-xl shadow-slate-400 shadow-lg p-10 '>IIIT Una is one of the 20 IIITs being setup, funded and managed by the Ministry of Human Resource Development, Govt. of India under the Public Private Partnership (PPP) model. The partners setting up IIIT Una are the Ministry of Human Resource Development, Govt. of India, the Govt. of Himachal Pradesh, HP Power Corporation Limited and HP Transmission Corporation Limited. Admissions to the undergraduate programmes in the Institute are made through the Joint Entrance Examination (JEE).
        At present, IIIT Una operates from its permanent campus at Saloh, Una. The campus is fully furnished and working full fledged from its permanent campus.</p>
      <h1 className='text-center text-4xl text-teal-800 my-14 font-bold'>COURSES</h1>
      <div className='text-xl w-full h-auto flex items-center justify-between px-32 py-10 '>
        <div className='shadow-slate-400 shadow-inner p-10'>
          <img className='w-52 h-52' src="/images/desktop.png" alt="CSE" />
          <h1 className='text-red-600 font-bold'>Computer Science</h1>
        </div>
        <div className='shadow-slate-400 shadow-inner p-10'>
          <img className='w-52 h-52' src="/images/cloud.jfif" alt="IT" />
          <h1 className='text-blue-800 font-bold'>Information Technology</h1>
        </div>
        <div className='shadow-slate-400 shadow-inner p-10'>
          <img className='w-52 h-52 mx-auto' src="/images/ic.webp" alt="ECE" />
          <h1 className='text-green-700 font-bold'>Electronics and Communication Engineering</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Home;