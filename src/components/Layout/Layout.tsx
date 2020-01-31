import React from 'react';
import { Col, Grid, Row, Content } from 'rsuite';
import LayoutSidebarNav from '../LayoutSidebarNav';
import LayoutHeaderNavbar from '../LayoutHeaderNavbar';
import { connect } from 'react-redux';
import './layout.less';

type LayoutProps = {
  hideSide: boolean;
};

export class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <Grid className="layout" fluid={true}>
        <Row gutter={0}>
          <Col className="layout__sidebar" xs={24} md={5} lg={4} smHidden={this.props.hideSide} xsHidden={this.props.hideSide}>
            <LayoutSidebarNav/>
          </Col>
          <Col sm={24} md={19} lg={20}>
            <LayoutHeaderNavbar/>
            <Content>
              {this.props.children}
            </Content>
          </Col>
        </Row>
      </Grid>
    );
  }
}


function mapStateToProps(state: any) {
  return { hideSide: state.layout.hideSide };
}

export default connect(mapStateToProps)(Layout);