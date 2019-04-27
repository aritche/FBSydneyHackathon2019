import { Component } from 'react';

export default class ExtractFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: 'An error has occurred.',
            url1: "../fake_database/list.txt",
            url2: "../fake_database/predictions.txt",
            raw: '',
            texts: [],
            posts: [],
            predictions: []
        }
        this.loadList();
        this.loadPreds();
    };
    
    loadList() {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", this.state.url1, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
                    var allText = rawFile.responseText;
                    this.state.raw = allText;
				}
			}
		};
        rawFile.send(null);
        var texts = this.state.raw.split("\n");
        for (var i = 0; i < texts.length; i++){
            var components = texts[i].split(",");
            var postID = parseInt(components[0]);
            var contributors = parseInt(components[1]);
            var tags = [];
            for(var j = 2; j < components.length; j++){
                tags.push(components[j]);
            }
            var post = {
                postID: postID,
                contributors: contributors,
                tags: tags
            }
            this.state.posts.push(post);
        }
    }

    loadPreds(){
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", this.state.url2, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					this.state.raw = allText;
				}
			}
		};
        rawFile.send(null);
        this.state.texts = this.state.raw.split("\n");
        this.state.words = this.state.texts[0].split(",")[0].split(" ");
        for (var i = 0; i < this.state.texts.length; i++){
            var components = this.state.texts[i].split(",");
            console.log(components);
            var predID = parseInt(components[0]);
            var postID = parseInt(components[1]);
            var prediction = components[2];
            var likes = parseInt(components[3]);
            var pred = {
                predID: predID,
                postID: postID,
                prediction: prediction,
                likes: likes
            }
            this.state.predictions.push(pred);
        }
    }

    getPosts(){
        return this.state.posts;
    }

    getPostByID(postID){
        return this.state.posts[postID];
    }

    getPredictions(postID){
        var predictions = [];
        for (var i = 0; i < this.state.predictions.length; i++){
            if (this.state.predictions[i].postID === postID){
                predictions.push(this.state.predictions[i]);
            }
        }
        return predictions;
    }

    getAllPredictions(){
        return this.state.predictions;
    }
    getSize(){
        return this.state.posts.length;
    }

    render(){
        return null;
    }
}
