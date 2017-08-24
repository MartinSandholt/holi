import React, { Component } from 'react';
import './PersonalInfo.css';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="personal-info">
                <img src="https://pbs.twimg.com/profile_images/766330229174390784/cdcY3bdn_400x400.jpg" alt="profile"/>
                <div className="info-list">
                    <p className="info-item primary">Moe Mondo</p>
                    <p className="info-item secondary"><span>Title</span>Web developer</p>
                    <p className="info-item secondary"><span>Manager</span>Doe Dondo</p>
                    <p className="info-item secondary"><span>Team</span>Discover</p>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;