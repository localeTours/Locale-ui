import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <p>This is the dashboard</p>
        <Link to="/map">Go to Map</Link>
      </div>
    )
  }
}

export default Dashboard
