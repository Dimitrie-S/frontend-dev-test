import React, { Component } from "react";
import Button from "./Button.js";
import Card from "./Card.js";

import "../styles/Pagination.css";

class Pagination extends Component {
  state = {
    cards: [],
    currentPage: 0,
    reverseNameSort: false,
    reverseTimeSort: false,
  };

  componentWillMount = () => {
    var cards = this.props.cards;
    this.paginate(cards);
  };

  paginate = (cards) => {
    // Simple Pagination with array of arrays, 12 items per page
    var items = [];
    var tempArr = [];
    for (let i = 0; i < cards.length; i++) {
      tempArr.push(cards[i]);
      if (tempArr.length > 11) {
        console.log("here");
        items.push(tempArr);
        tempArr = [];
      }
    }
    this.setState({ cards: items });
  };

  changePage = (index) => {
    this.setState({ currentPage: index });
    window.scrollTo(0, 0);
  };

  //   Sorting
  sortByName = () => {
    var sortedArray = this.props.cards;

    // Sort in both ways.
    if (this.state.reverseNameSort) {
      sortedArray.sort((a, b) => (a.title < b.title ? 1 : -1));
    } else {
      sortedArray.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
    this.setState({
      reverseNameSort: !this.state.reverseNameSort,
      reverseTimeSort: false,
    });
    this.paginate(sortedArray);
  };

  sortByTime = () => {
    var sortedArray = this.props.cards;
    if (this.state.reverseTimeSort) {
      sortedArray.sort((a, b) => b.duration - a.duration);
    } else {
      sortedArray.sort((a, b) => a.duration - b.duration);
    }
    this.setState({
      reverseTimeSort: !this.state.reverseTimeSort,
      reverseNameSort: false,
    });
    this.paginate(sortedArray);
  };

  render() {
    var cards = this.state.cards;
    var currentPage = this.state.currentPage;
    return (
      <div>
        <div className="align-center" style={{ marginTop: "20px" }}>
          <label>Sort by:</label>
          <Button onClick={() => this.sortByName()}>Name</Button>
          <Button onClick={() => this.sortByTime()}>Duration</Button>
        </div>
        <div className="cards-container">
          {cards[this.state.currentPage].map((item, index) => (
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

        {/* Displaying the pagination buttons. */}
        <div className="align-center">
          <Button
            type="pageButton"
            currentPage={currentPage === 0}
            onClick={() => this.changePage(0)}
          >
            1
          </Button>

          {currentPage - 3 > 0 && <span> ... </span>}
          {currentPage - 2 > 0 && (
            <Button
              type="pageButton"
              onClick={() => this.changePage(currentPage - 2)}
            >
              {currentPage - 1}
            </Button>
          )}
          {currentPage - 1 > 0 && (
            <Button
              type="pageButton"
              onClick={() => this.changePage(currentPage - 1)}
            >
              {currentPage}
            </Button>
          )}

          {0 < currentPage && currentPage < cards.length - 1 && (
            <Button
              currentPage={true}
              type="pageButton"
              onClick={() => this.changePage(currentPage)}
            >
              {currentPage + 1}
            </Button>
          )}

          {currentPage + 1 < cards.length && (
            <Button
              type="pageButton"
              onClick={() => this.changePage(currentPage + 1)}
            >
              {currentPage + 2}
            </Button>
          )}
          {currentPage + 2 < cards.length && (
            <Button
              type="pageButton"
              onClick={() => this.changePage(currentPage + 2)}
            >
              {currentPage + 3}
            </Button>
          )}

          {currentPage + 3 < cards.length && <span> ... </span>}
          <Button
            type="pageButton"
            currentPage={currentPage === cards.length - 1}
            onClick={() => this.changePage(cards.length - 1)}
          >
            {cards.length}
          </Button>
        </div>
      </div>
    );
  }
}
export default Pagination;
