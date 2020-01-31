import React from "react";
import { Grid, Row, Col } from "rsuite";
import FreightDetailsPanel from "../components/FreightDetailsPanel";
import DateAndTimeSelectionPanel from "../components/DateAndTimeSelectionPanel";
import RouteMap from "../../../components/RouteMap";
import RouteSelectionPanel from "../components/RouteSelectionPanel";
import { connect } from "react-redux";
import { DeliveryState } from "../store";
import '../styles/new-delivery.less';

type NewDeliveryViewProps = {
  pickupPlace: any;
  deliveryPlace: any;
};

class NewDeliveryView extends React.Component<NewDeliveryViewProps> {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={24} lg={14} style={{ padding: 16 }}>
            <RouteSelectionPanel />
            <FreightDetailsPanel />
            <DateAndTimeSelectionPanel />
          </Col>
          <Col xsHidden={true} smHidden={true} mdHidden={true} lg={10} style={{ padding: 0 }}>
            <RouteMap origin={this.props.pickupPlace} destination={this.props.deliveryPlace} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state: { delivery: DeliveryState }) {
  return { pickupPlace: { ...state.delivery.new.pickup.place }, deliveryPlace: { ...state.delivery.new.delivery.place } };
}

export default connect(mapStateToProps)(NewDeliveryView);