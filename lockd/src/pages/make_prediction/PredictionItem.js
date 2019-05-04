import React, { Component } from 'react';
import { Segment, Container, Button, Header, Grid, Item, Divider, TextArea, Input } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './MP.css';

export default class PredictionItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prediction: '',
            votes: 0,
            id: 0
        }

        this.state.prediction = this.props.prediction;
        this.state.votes = parseInt(this.props.votes);
        this.state.id = parseInt(this.props.id);

    };

    render() {
        return (
            <Item as={Link} to={'/prediction/' + this.state.id}>
                <Item.Content>
                    <Item.Header style={{backgroundColor:'blue'}}>
                        {this.state.prediction}
                    </Item.Header>

                    <Item.Meta style={{backgroundColor:'red'}}>
                        Author
                    </Item.Meta>

                    <Item.Description style={{backgroundColor:'white'}}>
                        <Grid> 
                            <Grid.Row>
                                <Grid.Column width={4}>{this.state.votes}</Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Item.Description>
                </Item.Content>
            </Item>
        )
    }


}
