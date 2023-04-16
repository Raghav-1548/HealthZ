import React from "react"
import { Map, Marker } from "pigeon-maps"

export default function MapView(props) {
  return (
    <>
    <div  className="overflow-hidden mt-10 rounded-3xl xl:m-10 sm:m-10 ">
    <Map height={300} defaultCenter={[13.0108,74.7943]} defaultZoom={17}>
      <Marker width={50} anchor={[13.0108,74.7943]} />
      <Marker width={50} anchor={[13.008896,74.79296]} />
    </Map>
    </div>
    </>
  )
}
