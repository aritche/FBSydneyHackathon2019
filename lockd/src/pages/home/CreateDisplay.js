import React from "react";
import { Grid } from "semantic-ui-react";
import ExtractFile from "../../ExtractFile";

//To - Do: Need to have a grid class that creates a grid based on the following example 

const GridExampleColumns = () => (
 
);

/**
 * Ok so what is the input values going to look like
 * Main prediction (i.e. prediction with most likes)
 * likes
 * contributers
 * tags
 * topic (unimplemented)
 * author:
 */
export default class createPost extends Component{
  constructor(){
    super();

    this.state = {
      errorMessage: 'An error has occured',
      value: '',
      //author
      prediction: "",
      tag1: "",
      tag2: "",
      likes: '',
      contributions:''
      
    }
    var extractor = new ExtractFile("fake_database/list.txt");
    this.state.prediction = extractor.getPredictions(1)[0].prediction;
    this.state.tag1 = extractor.getPosts(1).tags[0]; //could be getData()[0][0]
    this.state.tag2 = extractor.getPosts(1).tags[1];
    this.state.likes = extractor.getPredictions(1)[0].likes;
    this.state.contributions = extractor.getPosts(1).contributions;
  };

  render(){
    return(
      <Grid style={{ border: "2px solid black" }}>
      <Grid.Row>
        <Grid columns={2} padded>
          <Grid.Column style={{ border: "1px solid black" }}>
           <div>{
             this.state.tag1}
             </div>
          </Grid.Column>
          <Grid.Column style={{ border: "1px solid black" }}>
            <tdiv>{
              this.state.tag2
            }
            </tdiv>
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
        <div>{
          this.state.prediction}</div>
      </Grid.Row>
  
      <Grid.Row>
        <Grid columns={3} padded>
          <Grid.Column>
            <div>
              {this.state.likes}
              </div> </Grid.Column>
          <Grid.Column style={{ justifyContent: "center" }}>
          <div>{
            this.state.contributions}</div>
          </Grid.Column>
          <Grid.Column style={{ justifyContent: "right" }}>
            arijoshjoshjosfer
          </Grid.Column>
        </Grid>
      </Grid.Row>
    </Grid>
      
    )
  }

}
