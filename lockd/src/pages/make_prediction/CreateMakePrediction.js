import React, { Component } from 'react';
import { Segment, Container, Button, Header, Grid, Divider, TextArea, Input } from 'semantic-ui-react';
import ExtractFile from '../../ExtractFile';

export default class CreateMakePrediction extends Component {
    constructor() {
        super();
    };

    render() {
        return (
          <Container>
            <Container style={{backgroundColor: "#9AF36D", minHeight: '50vh', marginTop: "40px"}}>
            <Container>
            <p style={{fontSize : "30px"}}>Create A New Prediction</p>
            <Input
            style={{marginTop : "40px"}}
            icon='tags'
            iconPosition='left'
            labelPosition='right'
            placeholder='Enter tags'

            />
            </Container>
            <Container>
            <Input style ={{fontSize: "26px", align: "center"}} focus placeholder='Prediction...' />
            </Container>
            </Container>

            <Container style = {{backgroundColor: "#D1FA89", minHeight : "50vh"}}>
            <p style={{fontSize : "30px"}}>Similar Posts</p>
            <p>There are no similar posts
            </p>

            </Container>
            </Container>
        )
    }


}

//export default InputExampleFocus
