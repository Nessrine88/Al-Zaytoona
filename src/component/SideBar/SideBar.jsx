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
            <NavLink to="/Al-Zaytoona"><img src={logo} alt="" className="img-fluid nav-item" /></NavLink> 
          </div>
          <li className="nav-item">
            <NavLink to="/Al-Zaytoona/fikah" className="nav-link" activeClassName="active" style={{ textDecoration: 'none', color: 'black', fontSize: '2rem' }}>الفقه</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Al-Zaytoona/oussoul-fikah" className="nav-link" style={{ textDecoration: 'none', color: 'black', fontSize: '2rem' }}>أصول الفقه</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Al-Zaytoona/akidah" className="nav-link" style={{ textDecoration: 'none', color: 'black', fontSize: '2rem' }}>العقيدة</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Al-Zaytoona/mantak" className="nav-link" style={{ textDecoration: 'none', color: 'black' , fontSize: '2rem'}}>المنطق</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Al-Zaytoona/taarib" className="nav-link" style={{ textDecoration: 'none', color: 'black', fontSize: '2rem', paddingBottom: '11rem'}}>التعريب</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
