import React from "react";
import {
  Col,
  Row,
  Panel,
  RadioGroup,
  Radio,
  FormGroup,
  SelectPicker,
  HelpBlock,
  InputNumber,
  Icon
} from "rsuite";
import { NewDeliveryFreightDetails } from "../store/NewDeliveryFreightDetails";
import { DeliveryState } from "../store";
import { connect } from "react-redux";
import {
  setTypeOfGoods,
  setVolumeType,
  setVolumeQty,
  setLength,
  setWeight,
  setWidth,
  setHeight
} from "../store/actions";

const FreightDetailsPanelPartLabel = (props: { title: string }) => (
  <Row className="new-delivery__freight-details__part-label">
    <Col xs={24}>
      <span>{props.title}</span>
    </Col>
  </Row>
);

const FreightDetailsPanelMeasuresSeparator = () => (
  <Col xs={1} className="new-delivery__freight-details__x">
    <Icon icon="close" />
  </Col>
);

type FreightDetailsPanelProps = {
  details: NewDeliveryFreightDetails;
  setTypeOfGoods: typeof setTypeOfGoods;
  setVolumeType: typeof setVolumeType;
  setVolumeQty: typeof setVolumeQty;
  setLength: typeof setLength;
  setWeight: typeof setWeight;
  setWidth: typeof setWidth;
  setHeight: typeof setHeight;
};

export class FreightDetailsPanel extends React.Component<
  FreightDetailsPanelProps
> {
  render() {
    const volumeOptions = [
      {
        value: "Pallet",
        label: "Pallet"
      }
    ];
    const quantityOptions = [
      {
        value: 1,
        label: 1
      }
    ];
    return (
      <Panel
        className="new-delivery__freight-details"
        header="Freight Details"
        bordered={true}
      >
        <FreightDetailsPanelPartLabel title="Type of goods" />
        <Row>
          <Col xs={24}>
            <RadioGroup
              name="radioList"
              inline={true}
              appearance="picker"
              defaultValue="Paper"
              value={this.props.details.typeOfGoods}
              onChange={this.props.setTypeOfGoods}
            >
              <Radio value="Paper">Paper</Radio>
              <Radio value="Plastic">Plastic</Radio>
              <Radio value="Textil">Textil</Radio>
              <Radio value="Other">Other</Radio>
            </RadioGroup>
          </Col>
        </Row>
        <FreightDetailsPanelPartLabel title="Volume" />
        <Row>
          <Col className="new-delivery__freight-details__volume" xs={24} md={7}>
            <SelectPicker
              cleanable={false}
              searchable={false}
              defaultValue="Pallet"
              data={volumeOptions}
              value={this.props.details.volumeType}
              onChange={this.props.setVolumeType}
            />
            <SelectPicker
              cleanable={false}
              searchable={false}
              defaultValue={1}
              data={quantityOptions}
              value={this.props.details.volumeQty}
              onChange={this.props.setVolumeQty}
            />
          </Col>
          <Col xs={7} md={5}>
            <FormGroup>
              <InputNumber
                value={this.props.details.length}
                onChange={this.props.setLength}
              />
              <HelpBlock>Length (cm)</HelpBlock>
            </FormGroup>
          </Col>
          <FreightDetailsPanelMeasuresSeparator/>
          <Col xs={7} md={5}>
            <FormGroup>
              <InputNumber
                value={this.props.details.width}
                onChange={this.props.setWidth}
              />
              <HelpBlock>Width (cm)</HelpBlock>
            </FormGroup>
          </Col>
          <FreightDetailsPanelMeasuresSeparator/>
          <Col xs={7} md={5}>
            <FormGroup>
              <InputNumber
                value={this.props.details.height}
                onChange={this.props.setHeight}
              />
              <HelpBlock>Height (cm)</HelpBlock>
            </FormGroup>
          </Col>
        </Row>
        <FreightDetailsPanelPartLabel title="Weight" />
        <Row>
          <Col xs={24} sm={8} md={6}>
            <InputNumber
              value={this.props.details.weight}
              onChange={this.props.setWeight}
              postfix="kg"
              step={1}
            />
          </Col>
        </Row>
      </Panel>
    );
  }
}

function mapStateToProps(state: { delivery: DeliveryState }) {
  return {
    details: { ...state.delivery.new.details }
  };
}

export default connect(mapStateToProps, {
  setTypeOfGoods,
  setVolumeType,
  setVolumeQty,
  setLength,
  setWeight,
  setWidth,
  setHeight
})(FreightDetailsPanel);
