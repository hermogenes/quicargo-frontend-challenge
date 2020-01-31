import React from "react";
import DateTimeRangeSelector from "../../../components/DateTimeRangeSelector";
import { Panel, Form } from "rsuite";
import { connect } from "react-redux";
import { DeliveryState } from "../store";
import NewDeliveryPartDefinition from "../store/NewDeliveryPartDefinition";
import { setDeliveryDate, setDeliveryTime, setPickupDate, setPickupTime } from "../store/actions";

type DateAndTimeSelectionPanelProps = {
  pickup: NewDeliveryPartDefinition;
  delivery: NewDeliveryPartDefinition;
  setDeliveryDate?: typeof setDeliveryDate;
  setPickupDate?: typeof setPickupDate;
  setDeliveryTime?: typeof setDeliveryTime;
  setPickupTime?: typeof setPickupTime;
}

export class DateAndTimeSelectionPanel extends React.Component<DateAndTimeSelectionPanelProps> {
  render() {
    return (
      <Panel header="Date & Time" bordered={true} style={{ marginTop: 16 }}>
        <Form layout="inline">
          <DateTimeRangeSelector
            title="Pickup Date"
            date={this.props.pickup.date}
            onChange={this.props.setPickupDate}
            time={this.props.pickup.time}
            onTimeChange={this.props.setPickupTime}
          />
          <DateTimeRangeSelector
            title="Delivery Date"
            date={this.props.delivery.date}
            onChange={this.props.setDeliveryDate}
            time={this.props.delivery.time}
            onTimeChange={this.props.setDeliveryTime}
          />
        </Form>
      </Panel>
    );
  }
}

function mapStateToProps(state: { delivery: DeliveryState; }) {
  return {
    pickup: { ...state.delivery.new.pickup },
    delivery: { ...state.delivery.new.delivery },
  };
}

export default connect(mapStateToProps, { setDeliveryDate, setDeliveryTime, setPickupDate, setPickupTime })(DateAndTimeSelectionPanel);
