import React, { Component } from 'react';
import { Container, Button, Header, Grid, TextArea } from 'semantic-ui-react';
import ExtractFile from '../../ExtractFile';

export default class CreatePrediction extends Component {
    constructor() {
        super();

        this.state = {
            errorMessage: 'An error has occurred.',
            value: '',
            words: [],
            prediction: '',
            data: []
        }
        var extractor = new ExtractFile("fake_database/list.txt");
        this.state.prediction = extractor.getData()[0].prediction;
        this.state.words = this.state.prediction.split(" ");
    };

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
