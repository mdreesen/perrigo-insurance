'use client'
import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  padding: "10.5rem"
};

function map(data: any) {

  const center = {
    lat: Number('48.198279'),
    lng: Number('-114.307425')
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  })

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded && <iframe className={`${containerStyle}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d520.7094565253778!2d-114.34137875832235!3d48.424940244576106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536669a8261feabf%3A0x8164afed6af9c820!2sWisconsin%20Ave%2C%20Montana%2059937!5e0!3m2!1sen!2sus!4v1729538547800!5m2!1sen!2sus" style={{ border: "0", width: "100%", height: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
}

export default React.memo(map)