import Similarity from '../../Similarity';
import React, { Component } from "react";
import {
  Segment,
  Container,
  Button,
  Header,
  Grid,
  Divider,
  TextArea,
  Icon
} from "semantic-ui-react";
import ExtractFile from "../../ExtractFile";
import MetaInfo from "./MetaInfo";

export default class CreatePrediction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: 'An error has occurred.',
            value: '',
            author: 'Joshua Bennett',
            words: [],
            prediction: '',
            predictionVotes: 0,
            data: [],
            alternatives: [],
            max: 0,
            match: '',
            postID: 0,
            extractor: new ExtractFile()
        }

        this.state.postID = parseInt(this.props.postID);

        var options = this.state.extractor.getPredictions(this.state.postID);
        options.sort(function (a,b){
            return b.likes - a.likes; 
        });

        if (options.length > 0){
            this.state.prediction = options[0].prediction;
            this.state.predictionVotes = options[0].likes;
        }
        for (var item = 1; item < options.length; item++){
            this.state.alternatives.push([options[item].prediction, options[item].likes, options[item].predID]);
        }

        if (options.length > 0){
            var toCheck = options[0];
            console.log(toCheck);
            var sim = new Similarity();
            var toCompare = [];
            for(var i = 0; i < this.state.extractor.getAllPredictions().length; i++){
                if(toCheck.predID == this.state.extractor.getAllPredictions(i).predID){
                    toCompare.push(this.state.extractor.getAllPredictions(i).prediction);
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
            var array = sim.getSimilar(toCheck.prediction);
            console.log(array);
        }
    };

    handleClick = (selectedItem) => {
        alert('Increase vote count of "'+ selectedItem + '" in backend');
        this.state.extractor.addVote(selectedItem);
    }

    render() {
        return (
            <Container style={{backgroundColor: "gray", minHeight: '100vh'}}>
                <div style={{color:'white', paddingTop:'10px', fontSize:'20pt'}} className='centered-div'>
                <Grid centered style={{margin:"20px"}}>
                            <Grid.Row style={{padding:"3px"}}>
                    <Segment.Group horizontal style={{margin:"0", padding:"0"}}>
                        <Segment inverted color='green' style={{padding:"0 10px 0 10px"}}>
                           {this.state.predictionVotes} votes
                        </Segment>
                        <Button style={{
                            background:'none', 
                            fontSize:'24pt',
                            color:'black',
                            border:'3px solid white',
                            padding:'3px'
                            }}>
                            {this.state.prediction}
                        </Button>
                    </Segment.Group>
                            </Grid.Row>
                </Grid>
                </div>
                <Grid centered style={{margin:"20px"}}>
                        {this.state.alternatives.map(alt => 
                            <Grid.Row style={{padding:"3px"}}>
                                <Segment.Group horizontal style={{margin:"0", padding:"0"}}>
                                    <Segment inverted color='green' style={{padding:"0 10px 0 10px"}}>
                                       {alt[1]} votes
                                    </Segment>
                                    <Segment vertical style={{padding:"0 10px 0 10px"}}>{alt[0]}</Segment>
                                    <Button onClick={() => this.handleClick(alt[2])} icon style={{padding:"0", margin:"0"}}><Icon name='check circle outline'/></Button>
                                </Segment.Group>
                            </Grid.Row>
                        )}
                </Grid>
                
                <div>
                    {this.state.match}
                </div>

            </Container>
        )
    }
}
