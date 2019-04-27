import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import ExtractFile from "../../ExtractFile";

export default class createDisplay extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    var extractor = new ExtractFile("fake_database/list.txt");

    console.log(extractor.getPosts().length);
    for (var i = 0; i < extractor.getPosts().length; i++) {
        var val = extractor.getPredictions(i+1)[0];
        //console.log(val);
        //console.log(new Post(val.prediction,val.tags[0],val.tags[0],val.likes,val.contributions[0]));
        console.log(val);
    }
  }

  render() {
    return (
      <Container>
        {this.state.posts.map(post => 
          <Grid style={{ border: "2px solid black" }}>
            <Grid.Row>
              <Grid columns={2} padded>
                <Grid.Column style={{ border: "1px solid black" }}>
                  <div>{post.tag1}</div>
                </Grid.Column>
                <Grid.Column style={{ border: "1px solid black" }}>
                  <div>{post.tag2}</div>
                </Grid.Column>
              </Grid>
            </Grid.Row>

            <Grid.Row
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                border: "1px solid black",
                fontSize: "20px",
                justifyContent: "center"
              }}
            >
              <div>{post.prediction}</div>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={3} padded>
                <Grid.Column>
                  <div>{post.likes}</div>{" "}
                </Grid.Column>
                <Grid.Column style={{ justifyContent: "center" }}>
                  <div>{post.contributions}</div>
                </Grid.Column>
                <Grid.Column style={{ justifyContent: "right" }}>
                  arijoshjoshjosfer
                </Grid.Column>
              </Grid>
            </Grid.Row>
          </Grid>
        )}
      </Container>
    );
  }
}
