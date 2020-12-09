import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Navbar.css';

class navbar extends Component {
    static defaultProps = {
        shuffleCard() {}
    }

    static propTypes = {
        shuffleCard: propTypes.func
    }
    
    render() {
        return (
            <div className="Navbar">
                <div className="title">Memory Game</div>
                <div className="link">
                    <p onClick={this.props.shuffleCard}>New Game</p>
                </div>
            </div>
        )
    }
}

export default navbar;