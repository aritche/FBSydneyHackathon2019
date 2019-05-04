import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import CreateHome from './CreateHome';
import PredictionItem from '../make_prediction/PredictionItem';

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
                Home Page
                Posts:
                    {this.state.posts.map(post => 
                        <div>
                            <PredictionItem id={post[0]} prediction={post[1]} votes={post[2]}/>
                        </div>
                     )}
            </div>
        )
    }
}
