import React, { Component } from 'react';

import styles from './ComponentWithCssModules.module.scss';

class MyComponent extends Component {
  render() {
    return (
      <div className={styles['component']}>
          <h3 className={styles['component-text__description']}>Example uses CSS Modules</h3>
          <div style={{ display: 'flex' }}>
            <button className={styles['buttonTestStyling-Workday-Primary']} style={{ float: 'left' }}>Workday</button>
            <button
              className={styles['buttonTestStyling']}
              style={{ float: 'right', marginLeft: '20px' }}
            >
              Workday
            </button>
            <button
              className={styles['buttonTestStyling-Netflix-Primary']}
              style={{ float: 'right', marginLeft: '20px' }}
            >
              Netflix
            </button>
            <button
              className={styles['buttonTestStyling-Netflix']}
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
