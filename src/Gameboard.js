import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Gameboard.css';
import Card from './Card';

class Gameboard extends Component {
    static defaultProps = {
        shuffleCard() {},
        onClick() {}
    }

    static propTypes = {
        cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    }
    
    render() {
        const cardLists = this.props.cards.map((card, i) => (
            <Card key={i}
            showing={card.status}
            onClick={() => this.props.handleClick(card.id)}
            {...card}/>
        ))
        return (
            <div className="Gameboard">
                <div className="row">
                    {cardLists[0]}             
                    {cardLists[1]}             
                    {cardLists[2]}             
                    {cardLists[3]}             
                    {cardLists[4]}             
                    {cardLists[5]}             
                    {cardLists[6]}             
                    {cardLists[7]}
                </div>
                <div className="row">
                    {cardLists[8]}             
                    {cardLists[9]}             
                    {cardLists[10]}             
                    {cardLists[11]}             
                    {cardLists[12]}             
                    {cardLists[13]}             
                    {cardLists[14]}             
                    {cardLists[15]}
                </div>             
            </div>
        )
    }

}

export default Gameboard;