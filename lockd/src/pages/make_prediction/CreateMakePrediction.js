import React, { Component } from 'react';
import { Segment, Container, Button, Header, Grid, Divider, TextArea } from 'semantic-ui-react';
import ExtractFile from '../../ExtractFile';

export default class CreateMakePrediction extends Component {
    constructor() {
        super();
    };

    render() {
        return (
            <Container style={{backgroundColor: "gray", minHeight: '100vh'}}>
            ok making prediction
            </Container>
        )
    }
}
