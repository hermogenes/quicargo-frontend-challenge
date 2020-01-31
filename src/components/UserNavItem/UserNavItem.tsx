import React from 'react';
import { Nav, Icon, FlexboxGrid } from 'rsuite';
import './user-nav-item.less';

export default class UserNavItem extends React.Component {
  render() {
    return (
      <Nav.Item className="user-nav-item">
        <FlexboxGrid align="middle" justify="space-between">
          <FlexboxGrid.Item>Jhon</FlexboxGrid.Item>
          <FlexboxGrid.Item>
            <Icon size="lg" icon="user-circle-o" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Nav.Item>
    );
  }
}
