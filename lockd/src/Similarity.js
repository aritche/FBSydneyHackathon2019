import { Component } from 'react';
import ExtractFile from './ExtractFile';

export default class Similarity extends Component {
    constructor(){
      super();
      this.status = {
        extractor: new ExtractFile(),
        thresh: 0.1,
        matches: []
      }

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
          if(words1[i] === words2[j]){
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

    getSimilar(toCheck){
      var toCompare = [];
      for(var i = 0; i < this.status.extractor.getAllPredictions().length; i++){
        toCompare.push(this.status.extractor.getAllPredictions()[i].prediction);
      }
      var weights = this.getWeights(toCheck, toCompare);
      for(i = 0; i < weights.length; i++){
          if(weights[i] > this.status.thresh){
              this.status.matches.push(this.status.extractor.getAllPredictions()[i]);
          }
      }
      return this.status.matches;
    }
}
