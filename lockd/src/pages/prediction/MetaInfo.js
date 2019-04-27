import React, { Component } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';

export default class MetaInfo extends Component {
    constructor(){
        super();
        this.state = {
            comments: [
                        'This is a comment!',
                        "Another comments, haha!",
                        "Good prediction, friend."
                      ]
        }
    }


    render() {
        return (
            <Container textAlign='left' style={{padding:'0px', fontSize:'18px'}}>
                <strong>Comments:</strong>
                <Segment.Group >
                {
                    this.state.comments.map(comment => <Segment tertiary>{comment}</Segment>)
                }
                </Segment.Group>
            </Container>
        )
    }
}
