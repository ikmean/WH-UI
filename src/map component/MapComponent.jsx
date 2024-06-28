import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import './MapComponent.css'
import icon from '../lib/images/marker-icon.png'

const Icon = new L.Icon({
  iconUrl: icon
})

function MapComponent({ lat, lng, address }) {
  const initialCenter = lat && lng ? [lat, lng] : [41.785754, 44.751258]
  console.log(lat, lng)

  return (
    // <div>
    //   <iframe
    //     src={`https://maps.google.com/maps?q='+${lat}+','+${lng}+'&hl=es&z=14&amp;output=embed`}
    //     width='100%'
    //     height='100%'
    //     loading='lazy'
    //   ></iframe>
    // </div>
    <MapContainer center={initialCenter} zoom={13} className='map-container'>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={initialCenter} icon={Icon}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent
