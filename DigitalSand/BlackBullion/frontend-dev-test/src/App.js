import React, { Component } from "react";
import Card from "./components/Card";

class App extends Component {
  state = {
    cards: [],
    isLoaded: false,
  };

  componentDidMount = () => {
    fetch("http://www.blackbullion.com/_dev/api/lessons")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cards: result.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
          console.log(error);
        }
      );
  };
  render() {
    var isLoaded = this.state.isLoaded;
    var cards = this.state.cards;
    if (isLoaded) {
      return (
        <div>
          {cards.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              url={item.url}
              duration={item.duration}
            />
          ))}
        </div>
      );
    } else {
      return <div style={{ textAlign: "center" }}>Loading...</div>;
    }
  }
}
export default App;
