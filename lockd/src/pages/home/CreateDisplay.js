import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import ExtractFile from "../../ExtractFile";

export default class createDisplay extends Component {
  constructor() {
    super();

    this.state = {
      errorMessage: "An error has occured",
      value: "",
      //author
      prediction: "",
      tag1: "",
      tag2: "",
      likes: "",
      contributions: "",
      posts: []
    };

    var extractor = new ExtractFile("fake_database/list.txt");

    function post(prediction, tag1, tag2, likes, contributions) {
      this.prediction = prediction;
      this.tag1 = tag1;
      this.tag2 = tag2;
      this.likes = likes;
      this.contributions = contributions;
    }

    for (var i = 0; i < extractor.getPosts().length; i++) {
      console.log("abc" +  i);
      console.log(extractor.getPosts().length)
      console.log(extractor.getPredictions(i+1)[0].prediction)
      console.log(extractor.getPostByID(i + 1).tags[0])
      console.log(extractor.getPostByID(i + 1).tags[1])
      console.log(extractor.getPredictions(i+1)[0].likes)
      console.log(extractor.getPostByID(i+1).contributions[0])
      this.state.posts.push(
        new post(
          extractor.getPredictions(i + 1)[0].prediction,
          extractor.getPostByID(i + 1).tags[0],
          extractor.getPostByID(i + 1).tags[1],
          extractor.getPredictions(i+1)[0].likes,
          extractor.getPostByID(i+1).contributions[0]
        )
      )
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
