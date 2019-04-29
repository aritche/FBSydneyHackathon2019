import React, { Component } from 'react';
import { Segment, Container, Button, Header, Grid, Divider, TextArea, Input } from 'semantic-ui-react';
import ExtractFile from '../../ExtractFile';
import Similarity from '../../Similarity';
import PredictionItem from './PredictionItem';
import {Link} from 'react-router-dom';
import './MP.css';

export default class CreateMakePrediction extends Component {
    constructor() {
        super();

        this.state = {
            query: '',
            similar: []
        }

    };

    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                return { unseen: "does not display" }
            });
        }, 1000);
    }

    updateQuery = (e) => {
        this.setState({query: e.target.value});
    }

    performSearch = (e) => {
        if (e.key === 'Enter'){
            this.state.similar = [];
            var sim = new Similarity();

            var array = sim.getSimilar(this.state.query);
            // CODE FOR WHEN ENTER IS PRESSED
            // STRING YOU ENTERED IS STORED IN: this.state.query
            for (var item = 0; item<array.length; item++){
                this.state.similar.push([array[item].prediction, array[item].postID, array[item].likes]);
                //this.setState((state) => {similar: this.state.similar.push(array[item].prediction)});
                // "#3A435E"
            }
        }

    }

    render() {
        return (
            <Container>
                <Container id="back" style={{backgroundColor: "#3A435E", minHeight: '50vh', marginTop: "30px", paddingTop: "15px"}}>
                    <Container>
                        <p style={{color: "#455561", fontSize : "30px"}}>Create A New Prediction</p>
                        <Input
                        style={{marginTop : "30px"}}
                        icon='tags'
                        iconPosition='left'
                        labelPosition='right'
                        placeholder='Enter tags'
                        />
                    </Container>

                    <Container>
                        <Input style ={{fontSize: "26px", align: "center", marginTop: "10px"}} focus placeholder='Prediction...' onChange={this.updateQuery} onKeyPress={this.performSearch}/>
                    </Container>
                </Container>

                <Container style = {{marginTop:'20px', backgroundColor: "#455561", border:'1px solid black', minHeight : "50vh"}}>
                    <p style={{color: "#A6ABC4", fontSize : "35px", marginTop: "20px", paddingTop: "10px"}}>Similar Posts</p>

                    {this.state.similar.map(sim=>
                        <PredictionItem prediction={sim[0]} id={sim[1]} votes={sim[2]}/>
                    )}

                </Container>
            </Container>
        )
    }


}
