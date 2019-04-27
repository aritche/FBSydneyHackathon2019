import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Prediction from "./pages/prediction/Prediction";
import PredictionList from './pages/prediction_list/PredictionList';
import Display from './pages/home/display';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route exact path='/' component={Prediction}/>
              <Route path='/prediction' component={Prediction}/>
              <Route path='/home' component={Display}/>
            </Switch>
        )
    }
}
