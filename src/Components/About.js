import React from 'react'

function About() {
  return (
    <div className='w-full'>
        <div className='w-2/3 mx-auto my-20 py-10 h-[30rem] flex flex-col rounded-b-3xl shadow-xl'>
            <h1 className='bg-blue-500 w-full text-3xl text-white font-bold p-5'>About IIIT UNA</h1>
              <p className='text-justify p-10 text-xl'>IIIT Una is one of the 20 IIITs being setup, funded and managed by the Ministry of Human Resource Development, Govt. of India under the Public Private Partnership (PPP) model. The partners setting up IIIT Una are the Ministry of Human Resource Development, Govt. of India, the Govt. of Himachal Pradesh, HP Power Corporation Limited and HP Transmission Corporation Limited. Admissions to the undergraduate programmes in the Institute are made through the Joint Entrance Examination (JEE). At present, IIIT Una operates from its permanent campus at Saloh, Una. The campus is fully furnished and working full fledged from its permanent campus.</p>
              <a className='text-blue-700 underline text-xl' target='_blank' href="https://iiitu.ac.in/wp-content/uploads/2022/09/IIIT_Statutes.pdf">More About IIITU</a>
        </div>
    </div>
  )
}

export default About;