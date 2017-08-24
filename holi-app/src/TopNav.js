import React, { Component } from 'react';
import Logo from './Logo';

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <Logo/>
            </div>
        );
    }
}

export default TopNav;