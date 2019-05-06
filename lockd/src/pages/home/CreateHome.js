import React, {Component} from 'react';
import {Segment, Item} from 'semantic-ui-react';
import CreateHome from './CreateHome';
import PredictionItem from '../make_prediction/PredictionItem';
import Post from './Post';

export default class Home extends Component {
    constructor(){
        super();

        this.state = {
            posts: []
        }
    }

    getPosts(){
        fetch("http://localhost:5000/getPosts")
        //.then(res => res.json()).then(res => this.setState({posts: res}));
        .then(res=>res.json()).then(res=>{
            var posts = res;
            for (var i = 0; i < posts.length; i++){
                this.setState(prevState => ({
                    posts: [...prevState.posts, [posts[i].id, posts[i].prediction, posts[i].votes]]
                }))
            }
        });
    }

    componentWillMount(){
        this.getPosts();
    }

    render(){
        return(
            <div>
                <Item.Group divided link>
                    {this.state.posts.map(post => 
                        <Post
                            id={post[0]}
                            prediction={post[1]} 
                            votes={post[2]}
                            tags={['thanos', 'antman']}
                            description={'no description given, it would usually go here and by quite long so i"m trying to simulate one'}
                            date={'06/05/19'}
                            author={'Mr. Thanos'}
                        />
                     )}
                </Item.Group>
            </div>
        )
    }
}
