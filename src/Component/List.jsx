import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API } from '../api';

export default function List() {
     const[form, setForm] = useState({
    
    title: "",
    description: "",
    price: ""
  });

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();

    try{
      const reponse = await axios.post(`${API}/products`, form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert("Product Created");
      setForm({title: "", description: "", price: ""});
    }catch(err){
      console.error(err.reponse?.message || err.message);      
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
     <div className='flex flex-col items-center p-8 min-h-screen bg-teal-200'>
      <h2 className='text-3xl font-bold mb-5'>Welcome Admin</h2>

     
      <form onSubmit={createProduct}   className='bg-purple-500 text-white shadow-md rounded-lg p-6 w-full max-w-lg mb-8 '>
        <h3 className='text-xl font-semibold mb-4'>Add New Product</h3>
        
        <input placeholder='Product Title' value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className='border p-2 cursor-pointer rounded-md w-full mb-4' type="text" />
        <textarea placeholder='Product Description' value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className='border cursor-pointer p-2 rounded-md w-full mb-3' name="" />
        <input placeholder='Product Price' value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} className='border cursor-pointer p-2 rounded-md w-full mb-3' type="text" />
       <div className='flex  gap-7'>
         <button type='submit' className='px-4 py-2 rounded-md cursor-pointer bg-green-600 text-white hover:bg-lime-300 '>Add Product</button>
         <button onClick={handleLogout} className='border border-red-500 text-red-500 text-white px-4 py-2 bg-red-600 rounded-md cursor-pointer hover:bg-red-200'>Logout</button>

       </div>
      </form>
    </div>
  )
}
