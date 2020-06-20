import React, {Component} from "react";
import Cards from "./Cards";
import './Board.css'

export default class Board extends Component{
    render() {
        return (
            <div className="board">
                {
                  this.props.deckCards.map((card, index) => {
                      const nowInComparison = this.props.cardSelected.indexOf(card) > -1;
                      return <Cards
                          key={index}
                          icon={card.icon}
                          nowInComparison={nowInComparison}
                          selectCard={() => this.props.selectCard(card)}
                          wasGuessed={card.wasGuessed}
                      />
                  })
                }
            </div>
        );
    }

}
