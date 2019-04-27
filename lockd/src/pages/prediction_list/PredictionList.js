import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import CreatePredictionList from './CreatePredictionList';

export default class PredictionList extends Component {
    render() {
        return (
            <div>
                <CreatePredictionList />
            </div>
        )
    }
}
