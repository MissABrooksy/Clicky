import React, { Component } from 'react';


import Chase from './Chase.jpg'
import Rocky from './Rocky.jpg'
import Skye from './Skye.jpg'
import Zuma from './Zuma.jpg'
import Everest from './Everest.jpg'
import rubbel from './rubbel.jpg'
import Rider from './Rider.jpg'
import marshall from './marshall.jpg'
import Chickaletta from './Chickaletta.jpg'


// function Shuffle() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }

class Game extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Game">
                    <h1>Game</h1>
                    <div id="characters">
<div className="row">
    <div className="column">
                        <img src={Chase} alt="chase" ></img>
                        </div>
                        <div className="column">
                        <img src={Rocky} alt="chase"></img>
                        </div>
                        <div className="column">
                        <img src={marshall} alt="chase"></img>
                        </div>
                        </div>
                        <div className="row">
    <div className="column">
                        <img src={Chickaletta} alt="chase"></img>
                        </div>
                        <div className="column">
                        <img src={Everest} alt="chase"></img>
                        </div>
                        <div className="column">
                        <img src={Rider} alt="chase"></img>
                        </div>
                        </div>
                        <div className="row">
    <div className="column">
                        <img src={Zuma} alt="chase"></img>
                        </div>
                        <div className="column">
                        <img src={Skye} alt="chase"></img>
                        </div>
                        <div className="column">
                        <img src={rubbel} alt="chase"></img>
                        </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>

        )
    }
}


export default Game;