import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
                Just try to live normal life.
              </span>
              <span className="quote-author">- Unknown</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
