import React, { Component } from 'react';
import './ComponentWithSass.scss';

class MyComponent extends Component {
  render() {
    return (
      <div className="component">
        <h3 className="component-text__description">Example uses SASS</h3>
        <div style={{ display: 'flex' }}>
          <button className="buttonTestStyling-Workday-Primary" style={{ float: 'left' }}>Workday</button>
          <button
            className="buttonTestStyling"
            style={{ float: 'right', marginLeft: '20px' }}
          >
            Workday
          </button>
          <button
            className="buttonTestStyling-Netflix-Primary"
            style={{ float: 'right', marginLeft: '20px' }}
          >
            Netflix
          </button>
          <button
            className="buttonTestStyling-Netflix"
            style={{ float: 'right', marginLeft: '20px' }}
          >
            Netflix
          </button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
