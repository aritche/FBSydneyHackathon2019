import React, { Component } from 'react';
import { Segment, Container, Button, Header, Grid, Divider, TextArea, Input } from 'semantic-ui-react';
import ExtractFile from '../../ExtractFile';
import Similarity from '../../Similarity';
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
                this.state.similar.push([array[item].prediction, array[item].postID]);
                //this.setState((state) => {similar: this.state.similar.push(array[item].prediction)});
                // "#3A435E"
            }
        }

    }

    render() {
        return (
            <Container>
                <Container id="back" style={{backgroundColor: "#3A435E", minHeight: '50vh', marginTop: "40px", paddingTop: "10px"}}>
                    <Container>
                        <p style={{color: "#455561", fontSize : "30px"}}>Create A New Prediction</p>
                        <Input
                        style={{marginTop : "40px"}}
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

                <Container style = {{backgroundColor: "#455561", minHeight : "50vh"}}>
                    <p style={{color: "#A6ABC4", fontSize : "35px", marginTop: "20px", paddingTop: "10px"}}>Similar Posts</p>
                    {this.state.similar.map(sim=>
                    <Container as = {Link} to={'/prediction/'+sim[1]} style={{}}>
                        <div style = {{backgroundColor: "#6C6F7F", color: "black", width: "50%", margin: "0 auto", border: "1px black solid"}}>
                            {sim[0]}
                        </div>
                        
                    </Container>
                        )}
                </Container>
            </Container>
        )
    }


}
