import React from 'react';
import './Fikah.css';
import { NavLink } from 'react-router-dom';

const Fikah = () => {
  return (
<div className='grid grid-cols-3 gap-4 h-screen p-5 ml-5'>
  <NavLink to="Al-Zaytoona/zakat">
    <div className="w-72 h-64 bg-pink-500 flex justify-center items-center text-white rounded-xl">الزكاة</div>
  </NavLink>
  <div className="w-72 h-64 bg-blue-500 flex justify-center items-center text-white rounded-xl">الصلاة</div>
  <div className="w-72 h-64 bg-green-500 flex justify-center items-center text-white rounded-xl">الطهارة</div>
  <div className="w-72 h-64 bg-yellow-500 flex justify-center items-center text-white rounded-xl">الحج</div>
  <div className="w-72 h-64 bg-red-500 flex justify-center items-center text-white rounded-xl">السهو في الصلاة </div>
  <div className="w-72 h-64 bg-gray-500 flex justify-center items-center text-white rounded-xl">السهة </div>
</div>
  )
}

export default Fikah
