import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './component/SideBar/SideBar';
import Fikah from './component/fikah/Fikah';
import Akidah from './component/akidah/Akidah';
import Taarib from './component/taarib/Taarib';
import OussoulFikah from './component/oussoulFikah/OussoulFikah';
import Mantak from './component/Mantak/Mantak';
import Natijah from './component/natijah/Natijah';
import Home from './component/Home';
import Zakat from './component/fikah/Zakat';


function App() {
  const [totalProgress, setTotalProgress] = useState(0);

  return (
    <BrowserRouter>
      <div style={{zIndex:"999", position: "absolute"}}><SideBar /></div>
      <Routes>
      <Route path='/Al-Zaytoona' element={<Home />} />
        <Route path='/Al-Zaytoona/fikah' element={<Fikah />} />
        <Route path='/Al-Zaytoona/zakat' element={<Zakat />} />
        <Route path='/Al-Zaytoona/akidah' element={<Akidah />} />
        <Route path='/Al-Zaytoona/taarib' element={<Taarib />} />
        <Route path='/Al-Zaytoona/oussoul-fikah' element={<OussoulFikah />} />
        <Route path='/Al-Zaytoona/mantak' element={<Mantak />} />
        <Route path='/Al-Zaytoona/natijah' element={<Natijah totalProgress={totalProgress} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
