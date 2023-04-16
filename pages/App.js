import React from 'react'
import Home from '@/pages/components/Home'
import Ambulance from '@/pages/components/Ambulance';
import VirtualClinic from '@/pages/components/VirtualClinic';
import DiseasePredictions from '@/pages/components/DiseasePredictions';
import MentalHealth from '@/pages/components/MentalHealth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactDom from 'react-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route index element={<Home/>}/>
      <Route path="AmbulanceBooking" element={<Ambulance/>}/>
      <Route path="VirtualClinic" element={<VirtualClinic/>}/>
      <Route path="DiseasePredictions" element={<DiseasePredictions/>}/>
      <Route path="MentalHealthChatBot" element={<MentalHealth/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default index

const root = reactDom.createRoot(document.getElementById('root'));
root.render(<App/>);