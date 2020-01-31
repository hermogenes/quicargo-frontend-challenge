import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './map-styles';
import { enableMapsUse } from '../../store/maps/actions';
import store from '../../store';
import './route-map.less';
const apiKey = 'AIzaSyDsB5k8vytuni6Tpm560mLEYjMsi3wZf40';

type RouteMapProps = {
  origin?: any;
  destination?: any;
};

type RouteMapState = {
  directionsService?: google.maps.DirectionsService;
  directionsDisplay?: google.maps.DirectionsRenderer;
  map?: any;
};

export default class RouteMap extends React.Component<RouteMapProps, RouteMapState> {
  constructor(props: any) {
    super(props);
    this.state = { directionsService: undefined, directionsDisplay: undefined };
  }
  componentDidUpdate() {
    if (this.isDirectionParametersValid()) {
      this.setDirections();
    }
  }

  private isDirectionParametersValid() {
    return this.props.origin &&
      this.props.destination &&
      this.props.origin.location &&
      this.props.destination.location &&
      this.state.directionsDisplay;
  }

  private setDirections() {
    this.state.directionsDisplay!.setMap(this.state.map);
    this.state.directionsService!.route({
      origin: this.props.origin.location,
      destination: this.props.destination.location,
      travelMode: window.google.maps.TravelMode.DRIVING
    }, (response: any, status: any) => {
      if (status === 'OK') {
        this.state.directionsDisplay!.setDirections(response);
      }
    });
  }

  private onMapLoaded(componentInstance: RouteMap) {
    return (obj: { maps: any, map: any }) => {
      const { maps, map } = obj;
      const directionsService = new maps.DirectionsService();
      const directionsDisplay = new maps.DirectionsRenderer();

      componentInstance.setState({
        directionsService,
        directionsDisplay,
        map,
      });
      store.dispatch(enableMapsUse());
    };
  }
  render() {
    return (
      <div className="route-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey, libraries: ['places'] }}
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={0}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={this.onMapLoaded(this)}
          options={{ styles: mapStyles }}
        />
      </div>
    );
  }
}
