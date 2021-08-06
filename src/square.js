import React from 'react';
import { render } from 'react-dom';
class Square extends React.Component {
    constructor(props) {
            super(props);
            this.state= {
                value: null,
            };
        }
    
    render() {
        return (
            <button
            className="square"
            onClick={() => this.setState({value:'x'}) }
            >         
                {this.props.value}
            </button>
        );
    }
}
export default Square;


