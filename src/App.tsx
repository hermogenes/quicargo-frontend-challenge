import React from 'react';
import './styles/theme.less';
import Layout from './components/Layout';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NewDeliveryView from './app/delivery/views/NewDeliveryView';

class App extends React.Component {
  render() {
    const defaultRedirect = () => (<Redirect to="/deliveries/new" />);
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>
              <Route
                exact={true}
                path="/"
                render={defaultRedirect}
              />
              <Route path="/deliveries/new" exact={true} component={NewDeliveryView} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
