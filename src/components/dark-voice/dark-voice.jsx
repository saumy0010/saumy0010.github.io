import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MicrophoneIcon from 'material-ui/svg-icons/av/mic';
import MicrophoneOffIcon from 'material-ui/svg-icons/av/mic-off';
import  {Howl} from 'howler';
import './dark-voice.css';

const darkVoiceSound = new Howl({
  src: ['dark-voice.mp3']
});

class DarkVoiceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sound: false
        };
    }

    disableSound() {
      this.setState({sound: false});
      darkVoiceSound.pause();
    }

    enableSound() {
      this.setState({sound: true});
      darkVoiceSound.play();
      // Fires when the sound finishes playing.
      darkVoiceSound.on('end', () => {
        this.disableSound();
      });
    }

    render() {
        return (
            <div className="dark-voice">
              <p className="text-center">
                  <b className="dark-voice-tag">&#x3C;scarythoughts&#x3E; </b><br/>
                  Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.<br/>
                    <b className="dark-voice-tag">&#x3C;/scarythoughts&#x3E;</b>
              </p>
              <div className="microphone-action">
                { !this.state.sound &&
                  <FloatingActionButton backgroundColor="#A80202" onTouchTap={this.enableSound.bind(this)}>
                    <MicrophoneIcon />
                  </FloatingActionButton>
                }
                { this.state.sound &&
                  <FloatingActionButton backgroundColor="#A80202" onTouchTap={this.disableSound.bind(this)}>
                    <MicrophoneOffIcon />
                  </FloatingActionButton>
                }

              </div>
            </div>
        );
    }
}

export default DarkVoiceComponent;
