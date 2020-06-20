import React, {Component} from "react";
import ReactCardFlip from 'react-card-flip';
import './Cards.css'

export default class Cards extends Component{
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <div className="cards" onClick={this.props.selectCard}>
                <ReactCardFlip
                isFlipped={this.props.nowInComparison || this.props.wasGuessed}
                flipDirection="horizontal"
                >
                    <div className="front" onClick={this.handleClick}></div>
                    <div className="back" onClick={this.handleClick}>
                        <i className={`fa ${this.props.icon} fa-5x`}>
                        </i>
                    </div>
                </ReactCardFlip>
            </div>
        );
    }
}
