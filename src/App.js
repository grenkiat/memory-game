import React, {Component} from 'react';
import './App.css';
import Gameboard from './Gameboard';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
          {
              id: 1,
              front: '#00FFFF',
              back: '#696969',
              status: 0,
          },
          {
              id: 2,
              front: '#00FFFF',
              back: '#696969',
              status: 0,
          },
          {
              id: 3,
              front: '#FFE4C4',
              back: '#696969',
              status: 0,
          },
          {
              id: 4,
              front: '#FFE4C4',
              back: '#696969',
              status: 0,
          },
          {
              id: 5,
              front: '#FFF750',
              back: '#696969',
              status: 0,
          },
          {
              id: 6,
              front: '#FFF750',
              back: '#696969',
              status: 0,
          },
          {
              id: 7,
              front: '#DC143C',
              back: '#696969',
              status: 0,
          },
          {
              id: 8,
              front: '#DC143C',
              back: '#696969',
              status: 0,
          },
          {
              id: 9,
              front: '#008B8B',
              back: '#696969',
              status: 0,
          },
          {
              id: 10,
              front: '#008B8B',
              back: '#696969',
              status: 0,
          },
          {
              id: 11,
              front: '#9932CC',
              back: '#696969',
              status: 0,
          },
          {
              id: 12,
              front: '#9932CC',
              back: '#696969',
              status: 0,
          },
          {
              id: 13,
              front: '#8B008B',
              back: '#696969',
              status: 0,
          },
          {
              id: 14,
              front: '#8B008B',
              back: '#696969',
              status: 0,
          },
          {
              id: 15,
              front: '#483D8B',
              back: '#696969',
              status: 0,
          },
          {
              id: 16,
              front: '#483D8B',
              back: '#696969',
              status: 0,
          }
      ],
      shuffled: false,
      clicked: 0
    }
    this.shuffleCard = this.shuffleCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkColorMatch = this.checkColorMatch.bind(this);
    this.checkFlipped = this.checkFlipped.bind(this);
  }

  shuffleCard() {
    var {shuffled} = this.state;
    if(!shuffled) {
        const cards = [...this.state.cards];
        cards.forEach((c, i) => {
          c.status = 0;
          var randIndex = Math.floor(Math.random() * cards.length);
          [cards[i], cards[randIndex]] = [cards[randIndex], cards[i]];
        });
        this.setState({cards});
        shuffled = true;
    }
  }

  checkFlipped(id) {
    const cards = [...this.state.cards];
    let flipped_c_id = [0, 0];
    let j = 0;
    for(let i = 0; i < 16; i++) {
      if(j >= 2) {  // 2 cards already flipped
        break;
      }
      else {  // less than 2 cards flipped
        if(cards[i].status === 1) {
            flipped_c_id[j] = cards[i].id;
            j++;
        }
      }
    }
    if(flipped_c_id[0] !== 0 && flipped_c_id[1] !== 0) {
      console.log(flipped_c_id);
      this.checkColorMatch(flipped_c_id);
    }
    return flipped_c_id;
  }

  checkColorMatch(id_arr) {
    const cards = [...this.state.cards];
    let colors = ["", ""];
    colors[0] = cards.find(c => c.id === id_arr[0]);
    colors[1] = cards.find(c => c.id === id_arr[1]);
    if(colors[0].front === colors[1].front) {
        cards.forEach((c) => {    // set as matched.
          if(c.id === id_arr[0] || c.id === id_arr[1]) {
            c.status = 2;
          }
        });
      this.setState({cards});
    } else {
      cards.forEach((c) => {    // set as not matched.
        if(c.id === id_arr[0] || c.id === id_arr[1]) {
          c.status = 0;
        }
      })
      this.setState({cards});
    }
  }

  handleClick(id) {
    this.setState(prevState => {    // flip a card
      let cards = prevState.cards.map(c => (
        c.id === id ? {
          ...c,
          status: c.status === 0 ? 1 : 0,
        } : c
      ));
      return {cards};
    })
    this.checkFlipped(id);
  }

  componentDidMount() {
      this.shuffleCard(this.state.cards);
  }

  render() {
    return (
      <div className="App">
        <Navbar shuffleCard={this.shuffleCard}/>
        <Gameboard shuffleCard={this.shuffleCard} cards={this.state.cards} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
