import React from 'react'

function Search() {
  return (
    <div>
        <div className='w-full h-screen relative '>
            <img className='w-screen h-full blur-sm mt-5' src="/images/galaxy.gif" alt="" />
            <div className='flex absolute top-20 left-1/2 -translate-x-1/2 w-1/2'>
              <select className='outline-none text-center' defaultValue={1} name="search" >
                <option value="0" >Author Name</option>
            <option value="1">Book Name</option>
                <option value="2">Book ID</option>
                <option value="3">Publication</option>
              </select>
                <input className='w-full p-2 text-2xl outline-none text-sky-600 focus:font-semibold' type="text" name="book" placeholder='Search a Book' />
                <button className='text-white bg-slate-400 p-3 font-bold text-xl w-48'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Search;