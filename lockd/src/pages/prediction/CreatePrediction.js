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
  Icon,
  Dropdown
} from "semantic-ui-react";
import ExtractFile from "../../ExtractFile";
import MetaInfo from "./MetaInfo";
import './pred.css';

export default class CreatePrediction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: 'An error has occurred.',
            value: '',
            author: 'Joshua Bennett',
            words: [],
            prediction: [],
            predictionVotes: 0,
            data: [],
            alternatives: [],
            max: 0,
            match: '',
            postID: 0,
            extractor: new ExtractFile(),
            word_options: [[]],
            seen: 0
        }

        this.state.postID = parseInt(this.props.postID);
        var options = this.state.extractor.getPredictions(this.state.postID);
        options.sort(function (a,b){
            return b.likes - a.likes; 
        });
        
        // determine the major prediction
        if (options.length > 0){
            this.state.prediction = options[0].prediction.split(" ");
            this.state.predictionVotes = options[0].likes;
        }
        for (var item = 1; item < options.length; item++){
            this.state.alternatives.push([options[item].prediction, options[item].likes, options[item].predID]);
        }

        // generate the word alternatives
        for (var index = 0; index < this.state.prediction.length; index++){
             this.state.word_options.push([]);
        }
        for (var alt = 0; alt < this.state.alternatives.length; alt++){
            var alt_options = this.state.alternatives[alt][0].split(" ");
            for (var i = 0; i < alt_options.length; i++){
                this.state.word_options[i].push(alt_options[i]);
            }
        }

    };

    handleClick = (selectedItem) => {
        
        alert('Increase vote count of "'+ selectedItem + '" in backend');
        //this.state.extractor.addVote(selectedItem);
    }

    majorClick = (pred) => {
        alert("clicked " + pred);
    }

    getOptions = (wordIndex) => {
        // once the major prediction is determined, get alternate words:
        var result = []
        result.push({
                    key: this.state.prediction[this.state.seen],
                    text: this.state.prediction[this.state.seen],
                    value: this.state.prediction[this.state.seen]
                });
        var target = this.state.word_options[this.state.seen];

        for (var i = 0; i < target.length; i++){
            result.push({
                key: target[i],
                text: target[i],
                value: target[i]
            })
        }
        this.state.seen++;
        return result;
    }

    render() {
        return (
            <Container id="back" style={{backgroundColor: "gray", minHeight: '100vh'}}>
                <div style={{color:'white', paddingTop:'30px', fontSize:'20pt'}} className='centered-div'>
                <Grid centered style={{margin:"20px"}}>
                            <Grid.Row style={{padding:"3px"}}>
                    <Segment.Group horizontal style={{margin:"0", padding:"0"}}>
                        <Segment inverted color='grey' style={{width: '300px', padding:"0 10px 0 10px"}}>
                           {this.state.predictionVotes} votes
                        </Segment>
                        {this.state.prediction.map(pred => 
                            <Dropdown placeholder={pred} fluid selection options={this.getOptions(pred)}/>
                         )}
                    </Segment.Group>
                            </Grid.Row>
                </Grid>
                </div>
                <Divider horizontal invreted>Branching Predictions</Divider>
                <Grid centered style={{margin:"20px"}}>
                        {this.state.alternatives.map(alt => 
                            <Grid.Row style={{padding:"3px"}}>
                                <Segment.Group horizontal style={{margin:"0", padding:"0"}}>
                                    <Segment inverted color='grey' style={{padding:"0 10px 0 10px"}}>
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
