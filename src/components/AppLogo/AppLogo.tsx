
import logo from '../../assets/logo.svg';
import React from 'react';
import './app-logo.less';

export default class AppLogo extends React.Component<{ inverted?: boolean }> {
  render() {
    return (
      <img className={`app-logo ${this.props.inverted ? 'inverted' : undefined}`} src={logo} alt="Quicargo" />
    );
  }
}
