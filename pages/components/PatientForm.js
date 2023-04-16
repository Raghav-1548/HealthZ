import { setRevalidateHeaders } from 'next/dist/server/send-payload'
import React, { useEffect, useState } from 'react'
import MapView from './MapView'



function PatientForm() {
    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = () => {
      const pickLocation = "Bengaluru"
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickLocation}.json?`+
    new URLSearchParams({
      access_token: "pk.eyJ1IjoibW9oaXRobjIwMDQiLCJhIjoiY2xmY3BidnI5MndpbDN0bzE2d2djNHBxMCJ9.hJocPU3-D5pAZG15-1_pvw",
      limit :10
    })
    )
    .then(response => response.json())
    .then(data => {
      setPickupCoordinates(data.features[0].center)
    })
  }

  const getDropCoordinates = () => {
    const dropLocation = 'tumkur'
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropLocation}.json?`+
    new URLSearchParams({
      access_token: "pk.eyJ1IjoibW9oaXRobjIwMDQiLCJhIjoiY2xmY3BidnI5MndpbDN0bzE2d2djNHBxMCJ9.hJocPU3-D5pAZG15-1_pvw",
      limit :10
    })
    )
    .then(response => response.json())
    .then(data => {
      setDropoffCoordinates(data.features[0].center);
    })
  }


    useEffect(() => {
     getPickupCoordinates();
     getDropCoordinates();
    },[])
  

  return (
    <>
    <MapView 
    pickupCoordinates = {pickupCoordinates}
    dropoffCoordinates = {dropoffCoordinates} />
        <div className="flex justify-center">
        <form >Patient Details
            <input className='m-5 bg-slate-200 rounded-3xl p-5' placeholder='patient Name' />
            <input className='m-5 bg-slate-200 rounded-3xl p-5' placeholder='Age' type='number'/>
            <select className='m-5 bg-slate-200 rounded-3xl p-5' placeholder='Gender'>
                <option>Male</option>
                <option>Female</option>
            </select>
            <br />
            <button className='m-20 ml-64 p-3 px-6 rounded-3xl bg-slate-300'  type='submit'>Confirm</button>
          
        </form>
            </div>
    </>
  )
}
export default PatientForm