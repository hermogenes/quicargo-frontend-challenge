import React from 'react';
import { connect } from 'react-redux';

class AddressAutocompleteInput extends React.Component<{ mapsEnabled: boolean, onUpdate?: (place: any) => void }> {
  container: any = {};
  constructor(props: any) {
    super(props);
    this.container = React.createRef();
    this.state = {
      mapsEnabled: this.props.mapsEnabled
    };
  }
  onUpdate(place: any) {
    if (this.props.onUpdate) {
      this.props.onUpdate(place);
    }
  }
  render() {
    if (this.container.current && this.props.mapsEnabled) {
      const autoComplete = new window.google.maps.places.Autocomplete(this.container.current, {
        componentRestrictions: {
          country: 'nl'
        }
      });
      window.google.maps.event.addDomListener(this.container.current, 'blur', () => {
        window.google.maps.event.trigger(autoComplete, 'place_changed', {});
      });
      autoComplete.addListener('place_changed', () => {
        const newPlace = (autoComplete.getPlace() || {});
        this.onUpdate(newPlace.geometry);
      });
    }
    return (
      <input className="rs-input" ref={this.container} placeholder="Address" />
    );
  }
}

function mapStateToProps(state: any) {
  return { mapsEnabled: state.maps.mapsEnabled };
}

export default connect(mapStateToProps)(AddressAutocompleteInput);
