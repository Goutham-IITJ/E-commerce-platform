import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div >
    <>
      <Navbar/>
      <hr />
      <div className=' flex w-full'>
        <Sidebar/>
        <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element= {<Add/>} />
                <Route path='/list' element= {<List/>} />
                <Route path='/orders' element= {<Orders/>} />
              </Routes>
        </div>
      </div>
    </>
    </div>
  )
}

export default App
