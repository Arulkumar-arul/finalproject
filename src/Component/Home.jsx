import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className='flex min-h-screen bg-gray-100 w-200%'>
     <aside className=' w-64 bg-sky-300  flex flex-col justify-between p-6'>
    
    <div>
     <button onClick={handleLogout} className='border border-red-500 bg-red-400 text-white hover:bg-lime-400 px-6 py-2 rounded-md cursor-pointer text-red-400'>Logout</button>
    </div>
      
   </aside>
    <main>
    <div className=''>
      <h1 className='font-bold w-100% h-15 text-center text-amber-700 text-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>Welcome To Food App</h1>
    </div>
    
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-20 h-50'>
   
      <div className=' rounded-4xl p-5 ml-6 text-white bg-gray-200'>
        <img src="https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D" className='rounded-2xl h-20 w-20' alt="" />
        <h3 className='font-semibold text-center text-yellow-400'>chicken</h3>
        
      </div>
       <div className=' rounded-4xl p-5 ml-6 text-white bg-gray-200'>
        <img src="https://media.istockphoto.com/id/1253934130/photo/mutton-masala-curry-in-plastic-container-for-home-delivery.webp?a=1&b=1&s=612x612&w=0&k=20&c=YfBWKFt3Zje8yRAlAdteLnL5vhJvCnf2Vj2CU2ytgE4=" className='rounded-2xl h-20 w-20' alt="" />
        <h3 className='font-semibold text-center text-yellow-400'>Mutton</h3>
        
      </div>
       <div className=' rounded-4xl p-5 ml-6 text-white bg-gray-200'>
        <img src="https://images.unsplash.com/photo-1743517894265-c86ab035adef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D" className='rounded-2xl h-20 w-20' alt="" />
        <h3 className='font-semibold text-center text-yellow-400'>Dosa</h3>
        
      </div>
       <div className=' rounded-4xl p-5 ml-6 text-white bg-gray-200'>
        <img src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" className='rounded-2xl h-20 w-20' alt="" />
        <h3 className='font-semibold text-center text-yellow-400'>Burger</h3>
        
      </div>
    </div>
    <div>
      <img className='w-250 h-100 p-3 m-2' src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" alt="" />
    </div>
    
    <footer className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% m-2 text-white'>
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-20 h-50'>
        <div>
          <h1>The Good Batch</h1>
          <h3>978 first street</h3>
          <h3>Chennai</h3>
          <h3>Contact No:9087654321</h3>
        </div>
        <div>
          <h2>Join our Mailing List</h2>
          <div className='flex gap-4'>
            <input className='border-2 border-purple-500' type="text" name="Search" id="search" placeholder='Search' />
            <button type='submit' className='bg-blue-700 p-3 rounded-2xl text-white'>Search</button>
          </div>
        </div>
      </div>
    </footer>
    </main>
    </div>
  )
}
export default Home