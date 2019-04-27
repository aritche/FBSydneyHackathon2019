import React, { Component } from 'react';
import { Container, Button, Header, Grid, TextArea } from 'semantic-ui-react';

export default class CreatePrediction extends Component {
    constructor() {
        super();

        this.state = {
            errorMessage: 'An error has occurred.',
            value: '',
            words: ['This', 'is', 'my', 'prediction.']
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        var toParse = this.state.value;
        this.state.words = toParse.split();
        alert(this.state.words);
        event.preventDefault();
    }

    render() {
        return (
            <Container style={{backgroundColor: "gray", minHeight: '100vh'}}>
                <div style={{color:'white'}} className='centered-div'>
                        {
                            this.state.words.map(word => <Button>{word}</Button>)
                        }
                </div>
            </Container>
        )
    }
}
