import React, { Component } from 'react';
import { Container, Button, Header, Grid, TextArea } from 'semantic-ui-react';

export default class ExtractFile extends Component {
    constructor(url) {
        super();
        this.state = {
            errorMessage: 'An error has occurred.',
            url: url,
            raw: '',
            texts: [],
            datas: [],
        }

        this.update(this.state.url);
        
    };

    update = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					this.state.raw = allText;
				}
			}
		};
        rawFile.send(null);
        this.state.texts = this.state.raw.split("\n");
        this.state.words = this.state.texts[0].split(",")[0].split(" ");
        for (var i = 0; i < this.state.texts.length; i++){
            var data = new Object();
            var components = this.state.texts[i].split(",");
            var postID = components[0];
            var contributors = parseInt(components[1]);
            var tags = [];
            for(var j = 2; j < components.length; j++){
                tags.push(components[j]);
            }
            var data = {
                prediction: prediction,
                likes: likes,
                contributors: contributors,
                tags: tags
            }
            this.state.datas.push(data);
        }
    }

    getData(){
        return this.state.datas;
    }

    render(){
        return null;
    }
}