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
                    <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Web Development Intern" subtitle="Qualyval Pvt Ltd"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                        Worked on building the front-end of a patient management web app for a firm based out of United Kingdom.
                        <br />
                        <br />
                        Aug 2021 - Oct 2021
                  <br/><br/>
                            
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Student" subtitle="B.Tech, CSE"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                        Currently in the Senior Year of my Computer Engineering degree.
                        <br />
                        <br />
                        Jul 2018 - Ongoing
                  <br/><br/>
                            
                        </CardText>
                    </Card>
                  </div>
            </div>
        );
    }
}

export default TimelineComponent;
