import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import logo from '../../assets/logo.png';
import menuBar from '../../assets/menu-bar.png'

const SideBar = () => {
  return (
    <div className="sidebar-container bg-yellow-200 md:w-64 lg:w-94">
      <div className="sidebar" id="nav">
        <ul className="nav flex-column border-end border-1">
          <div className="col-md-6">
            <NavLink to="/"><img src={logo} alt="" className="img-fluid nav-item" /></NavLink> 
          </div>
          <li className="nav-item">
            <NavLink to="/fikah" className="nav-link" activeClassName="active" style={{ textDecoration: 'none', color: 'black', fontSize: '2rem' }}>الفقه</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/oussoul-fikah" className="nav-link" style={{ textDecoration: 'none', color: 'black', fontSize: '2rem' }}>أصول الفقه</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/akidah" className="nav-link" style={{ textDecoration: 'none', color: 'black', fontSize: '2rem' }}>العقيدة</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/mantak" className="nav-link" style={{ textDecoration: 'none', color: 'black' , fontSize: '2rem'}}>المنطق</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/taarib" className="nav-link" style={{ textDecoration: 'none', color: 'black', fontSize: '2rem', paddingBottom: '11rem'}}>التعريب</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
