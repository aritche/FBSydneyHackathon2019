import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Prediction from "./pages/prediction/Prediction";
import PredictionList from './pages/prediction_list/PredictionList';
import MakePrediction from './pages/make_prediction/MakePrediction';
import Home from './pages/home/Home';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route path='/' component={Home}/>
              <Route path='/home' component={Home}/>
              <Route path='/prediction/:postId' component={Prediction}/>
              <Route path='/predict' component={MakePrediction}/>
            </Switch>
        )
    }
}
