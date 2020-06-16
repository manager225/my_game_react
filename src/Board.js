import React, {Component} from "react";
import Cards from "./Cards";
import './Board.css'

export default class Board extends Component{
    render() {
        const cards = [1,2,3,4];
        return (
            <div className="board">
                {
                  cards.map((card) =>
                     <Cards>

                     </Cards>)
                }
            </div>
        );
    }

}
