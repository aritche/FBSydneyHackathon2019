import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import CreateHome from './CreateHome';

export default class Home extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <CreateHome/>
            </div>
        )
    }
}
