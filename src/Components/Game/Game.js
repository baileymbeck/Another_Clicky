import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import cards from '../../card.json'

// Import all components to game

class Game extends React.Component {
state = { cards: cards };

    render() {
        return (
            <div>
                <Header />
                {/* render this.state.cards */}
                <Footer />
            </div>
        );
    }
    // game functions: onclick, shuffle, score
}
export default Game;