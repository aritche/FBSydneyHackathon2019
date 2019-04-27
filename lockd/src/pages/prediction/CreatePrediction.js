import React, { Component } from 'react';
import { Segment, Container, Button, Header, Grid, Divider, TextArea } from 'semantic-ui-react';
import ExtractFile from '../../ExtractFile';
import MetaInfo from './MetaInfo'
import Similarity from '../../Similarity';

export default class CreatePrediction extends Component {
    constructor() {
        super();

        this.state = {
            errorMessage: 'An error has occurred.',
            value: '',
            author: 'Joshua Bennett',
            words: [],
            prediction: '',
            data: [],
            alternatives: [],
            max: 0,
            match: ''
        }
        var extractor = new ExtractFile();

        var options = extractor.getPredictions(1)
        options.sort(function (a,b){
            return b.likes - a.likes; 
        });

        this.state.prediction = options[0].prediction;
        console.log(this.state.words);
        for (var item = 1; item < options.length; item++){
            this.state.alternatives.push([options[item].prediction, options[item].likes]);
        }

        var toCheck = options[0];
        var sim = new Similarity();
        var toCompare = [];
        for(var i = 0; i < extractor.getAllPredictions().length; i++){
            if(toCheck.predID == extractor.getAllPredictions(i).predID){
                toCompare.push(extractor.getAllPredictions(i).prediction);
            }
        }
        var weights = sim.getWeights(toCheck.prediction, toCompare);
        for(var i = 0; i < weights.length; i++){
            if(weights[i] > this.state.max){
                this.state.max = weights[i];
                this.state.match = toCompare[i];
            }
        }
        console.log(this.state.max);
    };

    render() {
        return (
            <Container style={{backgroundColor: "gray", minHeight: '100vh'}}>
                <div style={{color:'white', paddingTop:'10px', fontSize:'20pt'}} className='centered-div'>
                    <Button style={{
                        background:'none', 
                        fontSize:'24pt',
                        color:'white',
                        border:'3px solid white',
                        padding:'3px'
                        }}>
                        {this.state.prediction}
                    </Button>
                </div>
                <Grid centered style={{margin:"20px"}}>
                        {this.state.alternatives.map(alt => 
                            <Grid.Row style={{padding:"3px"}}>
                                <Segment.Group horizontal style={{margin:"0", padding:"0"}}>
                                    <Segment inverted color='green' style={{padding:"0 10px 0 10px"}}>
                                       {alt[1]} votes
                                    </Segment>
                                    <Segment vertical style={{padding:"0 10px 0 10px"}}>{alt[0]}</Segment>
                                </Segment.Group>
                            </Grid.Row>
                        )}
                </Grid>
                
                <div>
                    {this.state.match}
                </div>
                <Divider />
                <MetaInfo/>

            </Container>
        )
    }
}
