import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function googleMap() {
  return (
    <>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -37.823528, lng: 144.958099 }}
      />
    </>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(googleMap));

export default function Map() {
  return (
    <div style={{width: "100vh", height: "500px"}}>
      <wrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
