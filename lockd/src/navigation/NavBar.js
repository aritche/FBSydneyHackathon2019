import React, { Component } from 'react';
import {Menu, Container, Input, Button, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    constructor(){
        super();

        this.state = {
            query: ''
        }
    };

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
                <span style={{color: "white", marginRight: "20px", marginTop: "10px", fontSize: "18px"}}>Predict'r</span>
                <Button icon color='blue' as={Link} to={'/home'} name='plus square outline'>
                    Home
                </Button>
              <Container style={{color:'white'}}>
                <Input icon='search' placeholder='Search for a prediction' onChange={this.updateQuery} onKeyPress={this.performSearch}/>
              </Container>
                <Button icon color='green' as={Link} to={'/predict'} name='plus square outline'>
                    New
                </Button>
            </Menu>

        )
    };
}
