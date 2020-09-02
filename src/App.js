import React from 'react';
import './App.css';
import title from './pics/Amazon_buyers.png';
import {Container, Row, Col} from 'reactstrap';
import hardcore from './pics/hardcore.jpg';
import irresponsible from './pics/irresponsible.png';
import normal from './pics/normal.png';
import talk from './pics/talktalk.png';
import troll from './pics/troll.png';
import verbose from './pics/verbose.jpg';

function App() {
    return (
        <div className="container-fluid">
            <header className="title"><img src={title} className="App-logo col-12" alt="Title"/></header>
            <div className="row App no-gutters">
                <div className="col-4 row1">
                    <img src={irresponsible} className="App-logo" alt="Title"/>
                    <img src={talk} className="App-logo" alt="Title"/>
                </div>
                <div className="col-1 no-gutters">
                    <div className="trump">
                        <img src={verbose} className="App-logo" alt="Title"/>
                    </div>
                </div>
                <div className="col-6 rightPart">
                    <img src={hardcore} className="App-logo" alt="Title"/>
                    <img src={troll} className="App-logo" alt="Title"/>
                    <img src={normal} className="App-logo" alt="Title"/>
                </div>

            </div>
        </div>
    );
}

export default App;
