import React from "react";
import { Grid, Image } from "semantic-ui-react";

const GridExamplePadded = () => (
  <div>
    <p>The following grid has vertical and horizontal gutters.</p>
    <Grid rows={3} padded>
      <Grid.Row>
        <Grid columns={2} padded>
          <Grid.Column>Hashtag 1</Grid.Column>
          <Grid.Column>hashtag 2</Grid.Column>
        </Grid>
      </Grid.Row>
      <Grid.Row>Prediction</Grid.Row>
      <Grid.Row>
        <Grid columns={3} padded>
          <Grid.Column>likes = 301</Grid.Column>
          <Grid.Column>contributers = 4</Grid.Column>
          <Grid.Column>original user</Grid.Column>
        </Grid>
      </Grid.Row>
    </Grid>
  </div>
);

export default GridExamplePadded;
