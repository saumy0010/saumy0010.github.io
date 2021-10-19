import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Experience</p>
                <div className="timeline-entry">
                  <Card>
                      <CardHeader title="Web Developer Intern" subtitle="Qualyval"/>
                      <CardText expandable={true}>
                          August	2021 - September 2021. Web developer intern at Qualyval.
                          <br/><br/>
                           
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Student" subtitle="B.Tech (CSE)"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                        At Babu Banarasi Das University, Lucknow 2018 - 2022.
                  <br/><br/>
                            
                        </CardText>
                    </Card>
                  </div>
            </div>
        );
    }
}

export default TimelineComponent;
