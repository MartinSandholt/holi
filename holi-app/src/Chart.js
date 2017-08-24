import React, { Component } from 'react';
import Radar from 'react-d3-radar';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Radar
                width={this.props.width}
                height={this.props.height}
                padding={this.props.padding}
                domainMax={this.props.maxSkillLevel}
                highlighted={null}
                onHover={(point) => {
                    if (point) {
                        console.log(`${point.variableKey}: ${point.value}`);
                    }
                }}
                data={{
                    variables: this.props.skillSet,
                    sets: [{
                        key: 'me',
                        label: 'My Skills',
                        values: this.props.userSkills
                    }],
                }}
                />
        );
    }
}

export default Chart;