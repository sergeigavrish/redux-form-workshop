import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from './Redux forms/containers/formPage';
import MenuAppBar from './components/menuAppBar';
import UncontrolledNameForm from './usual forms/usual/uncontrolled/uncontrolled';
import ControlledFormPage from './usual forms/usual/controlled/container/controlledFormPage';

class App extends Component {
  render() {
    return (
        <Fragment>
          <MenuAppBar />
          <Switch />
          <Route exact path="/REDUX-FORMS" component={FormPage} />
          <Route exact path="/uncontrolled-react" component={UncontrolledNameForm} />
          <Route exact path="/controlled-react" component={ControlledFormPage} />
        </Fragment>
    );
  }
}

export default App;
