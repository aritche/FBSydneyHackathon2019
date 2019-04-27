import React, { Component } from 'react';
import { Container, Button, Header, Grid, TextArea } from 'semantic-ui-react';
import MetaInfo from './MetaInfo'

export default class CreatePrediction extends Component {
    constructor() {
        super();

        this.state = {
            errorMessage: 'An error has occurred.',
            value: '',
            words: ['Jon', 'snow', 'will', 'bend', 'the', 'knee', 'to', 'save', 'the', 'North'],
            author: 'Joshua Bennett'
        }
    };

    render() {
        return (
            <Container style={{backgroundColor: "gray", minHeight: '100vh'}}>
                <div style={{color:'white', paddingTop:'10px', fontSize:'20pt'}} className='centered-div'>
                        {
                            this.state.words.map(word => 
                                <Button style={{
                                    background:'none', 
                                    fontSize:'24pt',
                                    color:'white',
                                    border:'3px solid white',
                                    padding:'3px'
                                    }}>
                                    {word}
                                </Button>) 
                        } ~{this.state.author}
                </div>

                <hr/>
                <MetaInfo/>
            </Container>
        )
    }
}
