import React, {Component} from "react";
import './Header.css'
import './logo.svg'

export default class Header extends Component{
    render() {
        return (
            <header>
                <div className="title">React Game</div>
                <div>
                    <button className="btn-restart" onClick={this.props.restartGame}>
                        Restart
                    </button>
                </div>
                <div className="title">
                    Количество ходов: {this.props.numberOfMove}
                </div>
            </header>
        );
    }
}
