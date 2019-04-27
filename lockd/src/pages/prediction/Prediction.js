import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import CreatePrediction from './CreatePrediction';

export default class Prediction extends Component {
    constructor(props){
        super(props);
        this.state = {
            'post_id': props.match.params.postId,
        }
    }


    render() {
        return (
            <div>
                {this.state.post_id}
                <CreatePrediction postID={this.state.post_id}/>
            </div>
        )
    }
}
