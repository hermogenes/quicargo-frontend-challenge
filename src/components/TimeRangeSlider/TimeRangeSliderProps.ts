export default class TimeRangeSliderProps {
  style?: React.CSSProperties;
  onChange?: (values: string[]) => void;
  value?: string[] = ['08:00', '18:30']
}