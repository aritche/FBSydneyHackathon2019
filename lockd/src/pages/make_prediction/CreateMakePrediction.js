import React, { Component } from 'react';
import { Segment, Container, Button, Header, Grid, Divider, TextArea, Input } from 'semantic-ui-react';
import ExtractFile from '../../ExtractFile';
import Similarity from '../../Similarity';

export default class CreateMakePrediction extends Component {
    constructor() {
        super();

        this.state = {
            query: '',
            similar: []
        }
       
    };

    updateQuery = (e) => {
        this.setState({query: e.target.value});
    }

    performSearch = (e) => {
        if (e.key === 'Enter'){
            var sim = new Similarity();
           
            var array = sim.getSimilar(this.state.query);
            console.log(array);
            // CODE FOR WHEN ENTER IS PRESSED
            // STRING YOU ENTERED IS STORED IN: this.state.query
            for (var item = 0; item<array.length; item++){
                this.setState(state=>{similar: this.state.similar.push(array[item].prediction)});
            }
        }

        
        

    }

    render() {
        return (
            <Container>
                <Container style={{backgroundColor: "#9AF36D", minHeight: '50vh', marginTop: "40px"}}>
                    <Container>
                        <p style={{fontSize : "30px"}}>Create A New Prediction</p>
                        <Input
                        style={{marginTop : "40px"}}
                        icon='tags'
                        iconPosition='left'
                        labelPosition='right'
                        placeholder='Enter tags'
                        />
                    </Container>

                    <Container>
                        <Input style ={{fontSize: "26px", align: "center"}} focus placeholder='Prediction...' onChange={this.updateQuery} onKeyPress={this.performSearch}/>
                    </Container>
                </Container>

                <Container style = {{backgroundColor: "#D1FA89", minHeight : "50vh"}}>
                    <p style={{fontSize : "30px"}}>Similar Posts</p>
                    {this.state.similar.map(sim=>
                    <Container>
                        {sim}
                    </Container>
                        )}
                    

                    
                </Container>
            </Container>
        )
    }


}

//export default InputExampleFocus
