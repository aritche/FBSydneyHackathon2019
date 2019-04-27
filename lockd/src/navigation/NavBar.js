import React, { Component } from 'react';
import {Menu, Container, Input, Button, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import ExtractFile from "../ExtractFile";

export default class NavBar extends Component {
    constructor(){
        super();

        this.state = {
            query: '',
            extractor: new ExtractFile(),
            r: 0
        }

        var results = this.state.extractor.getPosts(); 
        console.log(results);
        var max = results.length-1;
        var min = 0;
        this.state.r = results[Math.floor(Math.random() * (max - min + 1)) + min].postID;
    };

    handleClick = (e) => {
        var results = this.state.extractor.getAllPredictions(); 
        var max = results.length-1;
        var min = 0;
        this.state.r = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    

    updateQuery = (e) => {
        this.setState({ query: e.target.value });
    }

    performSearch = (e) => {
        if (e.key === 'Enter'){
            alert("You entered: " + this.state.query);
        }
        
    }


    render() {

        return (
            <Menu inverted pointing secondary style={{backgroundColor: '#313E50', padding: '10px', boxShadow: '2px 1px 2px #000000'}}>
                <span style={{color: "white", marginRight: "20px", marginTop: "10px", fontSize: "18px"}}>Predictr</span>
                <Button icon onClick={this.handleClick} color='blue' as={Link} to={'/prediction/' + this.state.r} name='plus square outline'>
                   Random Prediction 
                </Button>
              <Container style={{color:'white'}}>
              </Container>
                <Button icon color='green' as={Link} to={'/predict'} name='plus square outline'>
                    New
                </Button>
            </Menu>

        )
    };
}
