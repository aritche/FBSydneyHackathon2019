import React, { Component } from 'react';
import {Menu, Grid, Container, Input, Button, Icon, Search} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';
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
            <Menu inverted pointing secondary style={{backgroundColor: '#313E50', padding: '0', boxShadow: '2px 1px 2px #000000'}}>
                <Menu.Item as={Link} to={'/home'} name='Predictr' style={{}}/>
                <Menu.Item as={Link} to={'/prediction/' + this.state.r} onClick={this.handleClick} name='Random Prediction' style={{}}/>

                <Menu.Menu position='right' style={{}}>
                    <Menu.Item>
                        <Input placeholder='Search...'/>
                    </Menu.Item>
                    <Menu.Item as={Link} to={'/predict'} name='New'/>
                </Menu.Menu>
            </Menu>

        )
    };
}
