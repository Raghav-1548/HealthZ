import React from 'react'
import Home from '@/pages/components/Home'
import Ambulance from '@/pages/components/Ambulance';
import VirtualClinic from '@/pages/components/VirtualClinic';
import DiseasePredictions from '@/pages/components/DiseasePredictions';
import MentalHealth from '@/pages/components/MentalHealth';
import Image from 'next/image';

function index() { 
  return (
    <>
    <Image className='ml-5' alt="" width={300} height={500} src='/../public/HealthZLogo.jpeg' />
      <Home/>
    </>
  )
}

export default index
