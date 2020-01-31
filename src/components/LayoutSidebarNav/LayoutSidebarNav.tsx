import React from 'react';
import { Sidenav, Nav, Icon, Col, Badge, IconButton } from 'rsuite';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../store/layout/actions';
import AppLogo from '../AppLogo';
import './layout-sidebar-nav.less';

type LayoutSidebarNavType = {
  hideSide: boolean;
  toggleSidebar: typeof toggleSidebar;
};

class LayoutSidebarNav extends React.Component<LayoutSidebarNavType> {
  render() {
    return (
      <Sidenav className="layout-sidebar-nav" appearance="inverse">
        <Sidenav.Header>
          <AppLogo inverted={true} />
          <Col xs={4} mdHidden={true} lgHidden={true}>
            <IconButton
              className="layout-sidebar-nav__close"
              onClick={this.props.toggleSidebar}
              appearance="link"
              size="lg"
              icon={<Icon icon="close" />}
            />
          </Col>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="3" icon={<Icon icon="plus" />} active={true}>
              New Delivery
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<Icon icon="realtime" />}>
              My Deliveries <Badge content="4" />
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<Icon icon="history" />}>
              History <Badge content="2" />
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    );
  }
}

function mapStateToProps(state: any) {
  return { hideSide: state.layout.hideSide };
}

export default connect(mapStateToProps, { toggleSidebar })(LayoutSidebarNav);
