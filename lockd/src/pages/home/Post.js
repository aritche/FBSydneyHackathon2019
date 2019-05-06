import React, { Component } from 'react';
import { Label, Segment, Container, Button, Header, Grid, Item, Divider, TextArea, Input } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            tags: [],
            prediction: '',
            description: '',
            date: '',
            votes: 0,
            author: ''
        }

        this.state.prediction = this.props.prediction;
        this.state.votes = parseInt(this.props.votes);
        this.state.id = parseInt(this.props.id);
        this.state.tags = this.props.tags;
        this.state.description = this.props.description;
        this.state.date = this.props.date;
        this.state.author = this.props.author;
    };

    render() {
        return (
                <Item key={this.state.id} as={Link} to={'/prediction/' + this.state.id} style={{width:'75%', margin:'0 auto', backgroundColor:'lightblue'}}>
                    <Item.Content>
                        <Item.Header>
                            <Grid columns={4}>
                                <Grid.Row>
                                    <Grid.Column >
                                        {this.state.votes}
                                    </Grid.Column>

                                    <Grid.Column>
                                        {this.state.prediction}
                                    </Grid.Column>

                                    <Grid.Column>
                                        {this.state.tags.map(tag =>
                                            <Label color='green' style={{marginLeft:'10px'}}>#{tag}</Label>
                                        )}
                                    </Grid.Column>

                                    <Grid.Column>
                                        {this.state.author}
                                    </Grid.Column>

                                </Grid.Row>
                            </Grid>
                        </Item.Header>

                    </Item.Content>
                </Item>
        )
    }


}
