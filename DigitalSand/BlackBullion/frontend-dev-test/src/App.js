import React, { Component } from "react";
import Pagination from "./components/Pagination";

class App extends Component {
  state = {
    cards: [],
    isLoaded: false,
    error: false,
  };

  componentDidMount = () => {
    // Fetching the data
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
            error: true,
          });
          console.log(error);
        }
      );
  };
  render() {
    var isLoaded = this.state.isLoaded;
    var cards = this.state.cards;
    if (this.state.error) {
      return (
        <div>
          Something went wrong, please make sure you have disabled Cross-Origin
          restrictions in your browser.
        </div>
      );
    }
    if (isLoaded) {
      return (
        <div>
          <Pagination cards={cards} />
        </div>
      );
    } else {
      return <div style={{ textAlign: "center" }}>Loading...</div>;
    }
  }
}
export default App;
