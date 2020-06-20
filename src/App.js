import React, {Component} from 'react';
import Header from './Header'
import Board from "./Board";
import './App.css';
import buildDeckCards from "./utils/buildDeckCards";

const getInitialState = () => {
const deckCards = buildDeckCards();
    return {
        deckCards,
        cardSelected: [],
        cardComparison: false,
        numberOfMove: 0
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = getInitialState();
    }

    render() {
        return (
            <div className="App">
                <Header
                    numberOfMove={this.state.numberOfMove}
                    restartGame={() => this.restartGame()}
                />
                <Board
                    deckCards={this.state.deckCards}
                    cardSelected={this.state.cardSelected}
                    selectCard={(card) => this.selectCard(card)}
                />
            </div>
        );
    }

    selectCard(card) {
        if (
            this.state.cardComparison ||
            this.state.cardSelected.indexOf(card) > -1 ||
            card.wasGuessed
        ) {
            return;
        }

        const cardSelected = [...this.state.cardSelected, card];
        this.setState({
            cardSelected
        });

        if(cardSelected.length ===2 ) {
            this.comparePair(cardSelected)
        }
    }

    comparePair(cardSelected) {
        this.setState({compare: true});

        setTimeout(() => {
            const [firstCard, secondCard] = cardSelected;
            let deckCards = this.state.deckCards;

            if (firstCard.icon === secondCard.icon) {
                deckCards = deckCards.map((card) => {
                    if (card.icon !== firstCard.icon) {
                        return card;
                    }
                    return {...card, wasGuessed: true};
                });
            }

            this.checkIfThereIsAWinner(deckCards);
            this.setState( {
                cardSelected: [],
                deckCards,
                cardComparison: false,
                numberOfMove: this.state.numberOfMove + 1
            })
        }, 900)
    }

    checkIfThereIsAWinner(deckCards) {
        if (
            deckCards.filter((card) => !card.wasGuessed).length === 0
        ) {
            alert(`Поздравляю! Вы выйграли за ${this.state.numberOfMove} ходов!`);
        }
    }

    restartGame() {
        this.setState(
            getInitialState()
        )
    }
}

export default App;
