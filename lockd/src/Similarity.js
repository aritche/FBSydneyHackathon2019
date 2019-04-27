import React, { Component } from 'react';
import { Container, Button, Header, Grid, TextArea } from 'semantic-ui-react';

export default class Similarity extends Component {
    constructor(){
      super();
    }

    getWeights(phrase1, predictions){
      var array = [];
      for(var i = 0; i < predictions.length; i++){
        array.push(this.compare(phrase1, predictions[i]));
      }
      return array;
    }


    compare (phrase1, phrase2){
      var words1 = phrase1.split(" ");
      var words2 = phrase2.split(" ");
      var count = 0;
      var total = 0;
      for(var i = 0; i< words1.length; i++){
        for(var j = 0; j<words2.length; j++){
          if(words1[i].equals(words2[j])){
            count = count + 1;

          }
          total = total + 1;
        }
      }

      return count/total;
    }

    render(){
        return null;
    }
}
