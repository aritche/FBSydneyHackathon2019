import React, {Component} from "react";
import {Container, Grid } from "semantic-ui-react";

function predictions () {
  this.prediction= "antman will kill thanos";
  this.likes= 250;
  this.contributers= 100;
  this.hashtag1= "anus";
  this.hashtag2= "explode";

  this.getPrediction = function(){
    return this.prediction;
  }
  this.getLikes = function(){
    return this.likes;
  }
  this.getContributers = function(){
    return this.contributers;
  }
  this.getHastag1 = function(){
    return this.hashtag1;
  }
  this.getHastag2 = function(){
    return this.hashtag2;
  }


};

const GridExampleColumns = () => (
  <Grid style={{ border: "2px solid black" }}>
    <Grid.Row>
      <Grid columns={2} padded>
        <Grid.Column style={{ border: "1px solid black" }}>
          hashtag 1
        </Grid.Column>
        <Grid.Column style={{ border: "1px solid black" }}>
          hashtag 2{" "}
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
      Prediction
    </Grid.Row>

    <Grid.Row>
      <Grid columns={3} padded>
        <Grid.Column>likes = 1 </Grid.Column>
        <Grid.Column style={{ justifyContent: "center" }}>
          contributers = 2
        </Grid.Column>
        <Grid.Column style = {{justifyContent:"right"}}> original author = Josh</Grid.Column>
      </Grid>
    </Grid.Row>
  </Grid>
);

export default GridExampleColumns;

export default GridExamplePadded;
