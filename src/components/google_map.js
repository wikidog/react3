import React, { Component } from 'react';

class GoogleMap extends Component {

  shouldComponentUpdate() {
    // don't render itself
    return false;
  }

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }

  render() {
    // we can reference this div inside component using this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
