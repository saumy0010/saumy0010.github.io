import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              I am a Web Developer with a passion for creating beautiful and intuitive user interfaces.
              I have a strong background in both front-end and back-end development, and am currently working with React.
              <br />
              <br />
              When I'm not writing code, you can find me watching movies or playing Cricket.

            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
