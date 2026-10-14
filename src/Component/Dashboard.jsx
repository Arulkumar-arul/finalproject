import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Eye} from "lucide-react";
import {ShoppingBasket} from "lucide-react";
import { API } from '../api';

function Dashboard() {
  const navigate = useNavigate();
   const [products, setProducts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
  const allProducts = async () => {
          try {
              const response = await axios.get(`${API}/products`)
              setProducts(response.data.data);
          } catch (err) {
              console.error(err.message);
          }
      }
  
      useEffect(() => {
          allProducts();
      }, []);

  return (
    <div className='flex min-h-screen bg-gray-100 w-200%'>
      <aside className=' w-64  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%   flex flex-col justify-between p-6'>
    <div>
    <h2 className='font-semibold text-xl mb-8'>Welcome {}</h2>
    <nav className='space-y-4 ' >
      <a className='block  hover:bg-fuchsia-500 hover:rounded hover:p-3 hover:font-bold'  href="/home">Home</a>
      <a  className='block  hover:bg-fuchsia-500 hover:rounded hover:p-3 hover:font-bold'  href="/About">About</a>
      <a  className='block  hover:bg-fuchsia-500 hover:rounded hover:p-3 hover:font-bold'  href="/Contacts">Contacts</a>
      <a  className='block  hover:bg-fuchsia-500 hover:rounded hover:p-3 hover:font-bold'  href="#">Services</a>
      <a  className='block  hover:bg-fuchsia-500 hover:rounded hover:p-3 hover:font-bold'  href="/Profile">Profile</a>
      
    </nav>
    </div>
    <div>
      <button onClick={handleLogout} className='border border-red-500 bg-red-400 text-white hover:bg-lime-400 px-6 py-2 rounded-md cursor-pointer text-red-400'>Logout</button>
    </div>
   </aside>
   <main>
    <div className=''>
      <h1 className='font-bold w-100% h-15 text-center text-amber-700 text-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>Welcome Admin</h1>
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
    <div className='flex flex-col-3'>
       <div className=' bg-gray-50 rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-semibold mb-4'>All Products</h3>

                {
                    products.length === 0 ? (
                        <p className='text-gray-600'>No Product Found</p>
                    ) : (
                        <ul className='space-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-20'>
                            {
                                products.map(data => (
                                    <li className='flex text-center justify-between items-center rounded-2xl  bg-gray-200 pb-2' key={data._id}>
                                        <div>
                                          <h4 className=''>{data.image}</h4>
                                            <h4 className='font-bold'>{data.title}</h4>
                                            <p className='text-sm mb-4 text-gray-600'>{data.description}</p>
                                            <span className='bg-orange-200 px-4 py-1 rounded-lg font-semibold'>${data.price}</span><br />
                                           <div className='flex  gap-4 h-15'>
                                             <button className=' w-25 text-xs mt-4 bg-indigo-600 flex  gap-2 items-center rounded-md text-white font-bold'><ShoppingBasket />Add to Cart</button>
                                            <button className=' w-25 mt-4 bg-lime-600 text-xs rounded-md text-white font-bold flex  gap-2 items-center'><Eye /><a href="#">View More</a></button>
                                           </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
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

export default Dashboard