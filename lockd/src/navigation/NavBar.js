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
            <Menu inverted pointing secondary style={{backgroundColor: 'black', padding: '10px', boxShadow: '2px 1px 2px #000000'}}>
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
