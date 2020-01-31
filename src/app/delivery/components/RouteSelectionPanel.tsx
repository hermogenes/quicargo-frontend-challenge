import React from "react";
import { Panel } from "rsuite";
import RoutePlaceSelector from "../../../components/RoutePlaceSelector";
import { connect } from "react-redux";
import { setDeliveryPlace, setPickupPlace } from "../store/actions";

type RouteSelectionPanelProps = {
  setPickupPlace?: (place: any) => void;
  setDeliveryPlace?: (place: any) => void;
};

class RouteSelectionPanel extends React.Component<RouteSelectionPanelProps> {
  render() {
    return (
      <Panel header="Route" bordered={true}>
        <RoutePlaceSelector onSelect={this.props.setPickupPlace} title="Pickup" />
        <RoutePlaceSelector onSelect={this.props.setDeliveryPlace} title="Delivery" />
      </Panel>
    );
  }
}

export default connect(undefined, { setPickupPlace, setDeliveryPlace })(RouteSelectionPanel);