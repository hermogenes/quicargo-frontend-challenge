import React from 'react';
import { Nav, Icon, Navbar, IconButton } from 'rsuite';
import UserNavItem from '../UserNavItem';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../store/layout/actions';
import AppLogo from '../AppLogo';
import './layout-header-navbar.less';

type LayoutHeaderNavbarProps = {
  hideSide: boolean;
  toggleSidebar: any;
};

class LayoutHeaderNavbar extends React.Component<LayoutHeaderNavbarProps> {
  render() {
    return (
      <Navbar className="layout-header-navbar">
        <Navbar.Body>
          <Nav className="rs-hidden-md rs-hidden-lg">
            <AppLogo />
          </Nav>
          <Nav pullRight={true}>
            <UserNavItem />
            <IconButton
              className="rs-hidden-md rs-hidden-lg"
              onClick={this.props.toggleSidebar}
              appearance="link"
              size="lg"
              icon={<Icon className="layout-header-navbar__menu-icon" icon="bars" />}
            />
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  }
}

function mapStateToProps(state: any) {
  return { hideSide: state.layout.hideSide };
}

export default connect(mapStateToProps, { toggleSidebar })(LayoutHeaderNavbar);