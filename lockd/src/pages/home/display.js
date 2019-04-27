import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import CreatePrediction from './CreatePrediction';

export default class Prediction extends Component {
    render() {
        return (
            <div>
                <CreatePrediction />
            </div>
        )
    }
}