import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class WifiMap extends React.Component {
  state: {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClick = (props) => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={ 14 }
        initialCenter={{lat: 40.7831, lng:-73.9712}}
        // onClick={this.onMapClick}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
})(WifiMap);
