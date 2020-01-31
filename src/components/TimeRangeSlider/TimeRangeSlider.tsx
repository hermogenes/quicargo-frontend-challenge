import React from "react";
import nouislider from "nouislider";
import "nouislider/distribute/nouislider.css";
import "./time-range-slider.less";
import TimeRangeSliderProps from "./TimeRangeSliderProps";

class TimeRangeSlider extends React.Component<TimeRangeSliderProps, {}> {
  constructor(props: Readonly<TimeRangeSliderProps>) {
    super(props);
    this.container = React.createRef();
  }

  private getTimeFrom48Int(value: number) {
    const div = Math.trunc(value) / 2;
    let hour = Math.trunc(div);
    let minutes = div > hour ? "30" : "00";
    if (hour === 24) {
      hour = 23;
      minutes = "59";
    }
    return `${hour}:${minutes}`.padStart(5, "0");
  }

  private get48IntFromTime(value: string) {
    const parts = value.split(":");
    const hour = Number(parts[0]) * 2;
    return hour + (Number(parts[1]) === 0 ? 0 : Math.ceil(Number(parts[1]) / 30));
  }

  container: any = {};

  componentDidMount() {
    if (this.container.current) {
      const start = this.props.value
      ? this.props.value.map(this.get48IntFromTime)
      : [16, 37];
      nouislider.create(this.container.current, {
        start,
        step: 1,
        connect: true,
        behaviour: "snap",
        tooltips: [
          { to: this.getTimeFrom48Int },
          { to: this.getTimeFrom48Int }
        ],
        range: {
          min: 0,
          max: 48
        }
      } as any);
      this.container.current.noUiSlider.on("update", (values: string[]) => {
        if (this.props.onChange) {
          this.props.onChange(values.map(Number).map(this.getTimeFrom48Int));
        }
      });
    }
  }
  render() {
    return (
      <div
        style={this.props.style}
        className="time-range-slider"
        ref={this.container}
      />
    );
  }
}

export default TimeRangeSlider;
