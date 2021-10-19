import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Wanna take a look at what I've built? Head over to my GitHub</p>
                <Card>
                  <CardHeader
                    subtitle="Github Profile"
                    title="saumy0010"
                    avatar="github.png"
                  />
                <CardText>
                        All my projects are availble here; feel free to fork.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/saumy0010" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
