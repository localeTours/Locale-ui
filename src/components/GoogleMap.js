import React, { Component } from 'react';
import { withScriptjs, GoogleMap, withGoogleMap, Marker } from "react-google-maps";

export const CustomMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{lat: 40.678832, lng: -73.950677}}
      >
    </GoogleMap>
))
