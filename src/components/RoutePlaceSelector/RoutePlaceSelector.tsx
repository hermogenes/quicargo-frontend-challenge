import React from 'react';
import { SelectPicker } from 'rsuite';
import './route-place-selector.less';
import AddressAutocompleteInput from '../AddressAutocompleteInput';

type RoutePlaceSelectorProps = {
  title: string;
  onSelect?: (place: any) => void;
};

export default class RoutePlaceSelector extends React.Component<RoutePlaceSelectorProps> {
  render() {
    const countryOptions = [{
      value: 'NL',
      label: 'Netherlands'
    }];

    return (
      <div className="route-place-selector">
        <div>
          <span>{this.props.title}</span>
          <SelectPicker className="route-place-selector__country" cleanable={false} searchable={false} defaultValue='NL' data={countryOptions} />
        </div>
        <div>
          <AddressAutocompleteInput onUpdate={this.props.onSelect} />
        </div>
      </div>
    );
  }
}
