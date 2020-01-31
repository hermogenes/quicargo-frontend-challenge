import React from 'react';
import { Col, Row, ControlLabel, DatePicker } from 'rsuite';
import TimeRangeSlider from '../TimeRangeSlider';
import './date-time-range-selector.less';

type DateTimeRangeSelectorProps = {
  date?: Date;
  title: string;
  time?: string[];
  onChange?: (value: Date) => void;
  onTimeChange?: (values: string[]) => void;
};

export default class DateTimeRangeSelector extends React.Component<DateTimeRangeSelectorProps> {
  isDisabledDate(date?: Date) {
    return date! < new Date();
  }
  render() {
    const today = new Date();
    today.setHours(0, 0, 0);
    return (
      <Row className="date-time-range-selector">
        <Col xs={7} md={5}>
          <ControlLabel>{this.props.title}</ControlLabel>
        </Col>
        <Col xs={17} md={7} lg={6}>
          <DatePicker
            placement="auto"
            format="DD/MM/YYYY"
            onChange={this.props.onChange}
            value={this.props.date}
            defaultValue={today}
            cleanable={false}
            disabledDate={this.isDisabledDate}
          />
        </Col>
        <Col xs={24} md={12}>
          <TimeRangeSlider onChange={this.props.onTimeChange} value={this.props.time} />
        </Col>
      </Row>
    );
  }
}
