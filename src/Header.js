import React, {Component} from "react";
import './Header.css'

export default class Header extends Component{
    render() {
        return (
            <header>
                <div className="title">React Game</div>
                <div>
                    <button className="btn-restart">
                        Restart
                    </button>
                </div>
                <div className="title">
                    Количество ходов:
                </div>
            </header>
        );
    }
}
