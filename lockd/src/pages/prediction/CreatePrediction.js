import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';

export default class CreateLoginForm extends Component {
    constructor() {
        super();

        this.state = {
            errorMessage: 'An error has occurred.'
        }
    };

    render() {
        return (
            <Container style={{backgroundColor: "gray", minHeight: '100vh'}}>
                <div style={{color:'white'}} className='centered-div'>
                    CENTRED TEXT CONTENT
                </div>
            </Container>
        )
    }
}
