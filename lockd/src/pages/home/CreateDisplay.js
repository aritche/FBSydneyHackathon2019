import React from "react";
import { Grid } from "semantic-ui-react";
import ExtractFile from "../../ExtractFile";

//To - Do: Need to have a grid class that creates a grid based on the following example 


/**
 * Ok so what is the input values going to look like
 * Main prediction (i.e. prediction with most likes)
 * likes
 * contributers
 * tags
 * topic (unimplemented)
 * author:
 */
export default class createDisplay extends Component{
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
      contributions:'',
      posts: [],
      
    }
    
    var extractor = new ExtractFile("fake_database/list.txt");
    function post (prediction, tag1, tag2, likes, contributions) {
      this.prediction = prediction;
      this.tag1 = tag1;
      this.tag2 = tag2;
      this.likes = likes;
      this.contributions = contributions;
    }

    for (i=0; i<extractor.getPosts.length; i++){
      posts.push(new post(extractor.getPredictions(i+1)[0].prediction,extractor.getPosts(i+1).tags[0], 
        extractor.getPosts(i+1).tags[0], extractor.getPredictions(i)[0].likes, extractor.getPosts(i).contributions));
    }

  };

  render(){
    return(
      <Container> 

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
    </Container>
    )
  }

}
