import React, { Component } from 'react';
import {Menu, Container} from 'semantic-ui-react';

export default class NavBar extends Component {
    constructor(){
        super();

        this.state = {
            query: ''
        }
    };

    onQueryChange = (e) => {
        this.setState({ query: e.target.value });
    };

    onQuerySubmit = () => {
        alert("Searched for:  " + this.state.query);
    };

    render() {

        return (
            <Menu inverted pointing secondary style={{backgroundColor: '#193446', boxShadow: '2px 1px 2px #000000', maxHeight: '45px'}}>
              <Container style={{color:'white'}}>
                    NAVBAR CONTENT
              </Container>
            </Menu>

        )
    };
}
