import React, { Component } from 'react';
import { choice } from './helper';
import Coin from './Coin';

class CoinContainer extends Component {

    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            curCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                curCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin["side"] === 'heads' ? 1 : 0),
                nTails: st.nTails + (newCoin["side"] === 'tails' ? 1 : 0),

            };
        })
    }
    handleClick(e) {
        this.flipCoin();
    }


    render() {
        return (
            <div clasName='CoinContainer'>
                <h2>Let's flip a coin!</h2>
                
                {/* info= is for passing in an entire object */}
                {this.state.curCoin && <Coin info={this.state.curCoin} />}
                <button onClick={this.handleClick}>Flip!</button>
                <p>Out of {this.state.nFlips} flips, there were {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </div>
        )
    }

}

export default CoinContainer;