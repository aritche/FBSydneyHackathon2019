import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Prediction from "./pages/prediction/Prediction";
import PredictionList from './pages/prediction_list/PredictionList';
import Display from './pages/home/Display';
import MakePrediction from './pages/make_prediction/MakePrediction';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
             
              <Route path='/prediction/:postId' component={Prediction}/>
              <Route path='/home' component={Display}/>
              <Route path='/predict' component={MakePrediction}/>
            </Switch>
        )
    }
}
