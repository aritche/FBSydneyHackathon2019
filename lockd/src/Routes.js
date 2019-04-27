import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Prediction from "./pages/prediction/Prediction";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route exact path='/' component={Prediction}/>
              <Route path='/prediction' component={Prediction}/>
            </Switch>
        )
    }
}
