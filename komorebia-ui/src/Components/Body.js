import React, {Component} from 'react';
import ActivityList from './ActivityList.js';
import CreateActivity from './CreateActivity.js';
import '../CSS/Body.css';

class Body extends Component{
  constructor(props){
    super(props);
    // console.log(this.props.myActivities);
  }
  _loadMyActivities(){
    if(this.props.myActivities.length === 0){
      return(
        <div>
          <div className="divider"></div>
          <h2>My Activity Schedule</h2>
          <p className="no-content-text">You have signed up for any activities yet!</p>
        </div>
      )
    } else {
      return (
        <div>
          <div className="divider"></div>
          <h2>My Activity Schedule</h2>
          <ActivityList activities={this.props.myActivities} addmyactivity={this.props.addmyactivity} users={this.props.users} />
        </div>
      )
    }
  }
  _loadMyCreatedActivities(){
    if(this.props.myCreatedActivities.length === 0){
      return(
        <div>
          <div className="divider"></div>
          <h2>My Created Activities</h2>
          <p className="no-content-text">You have created any activities yet!</p>
        </div>
      )
    } else {
      return(
        <div>
          <div className="divider"></div>
          <h2>My Created Activities</h2>
          <ActivityList activities={this.props.myCreatedActivities} addmyactivity={this.props.addmyactivity} users={this.props.users} />
        </div>
      )
    }
  }
  _loadSpotlightActivities(){
    return(
      <div>
        {/* <div className="divider"></div> */}
        <h2>Spotlight Activities</h2>
        <ActivityList activities={this.props.activities} addmyactivity={this.props.addmyactivity} users={this.props.users} />
      </div>
    )
  }
  render(){
    let spotlightResults = this._loadSpotlightActivities();
    let myCreatedResults = this._loadMyCreatedActivities();
    let myParticipatingResults = this._loadMyActivities();
    return(
      <div className="body-content-container">
        {spotlightResults}
        {myParticipatingResults}
        {myCreatedResults}
      </div>
    )
  }
}

export default Body;
