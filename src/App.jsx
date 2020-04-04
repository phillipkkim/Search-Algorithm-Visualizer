import React, { Component } from "react";
import "./App.css";
import Block from "./components/block.jsx";
import { Column, Row } from "simple-flexbox";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "./index.css";
import { linearSearch } from "./algorithms/linearSearch.js";
import { jumpSearch } from "./algorithms/jumpSearch.js";
import { binarySearch } from "./algorithms/binarySearch.js";
import { interpolationSearch } from "./algorithms/interpolationSearch.js";
import { exponentialSearch } from "./algorithms/exponentialSearch.js";
import { fibonacciSearch } from "./algorithms/fibonacciSearch.js";
import { ternarySearch } from "./algorithms/ternarySearch.js";

const PIXEL_WIDTH = 10;
const INCREMENT = 7;
const START_TOTAL = 30;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numBlocks: START_TOTAL,
      targetSize: Math.floor(START_TOTAL / 2),
      blockList: [],
      searching: false,
      speed: 200
    };
  }

  componentDidMount() {
    const blockList = getInitialBlockList(
      this.state.numBlocks,
      this.state.targetSize
    );
    this.setState({ blockList });
  }

  clear() {
    const blockList = [...this.state.blockList];
    for (let i = 1; i < blockList.length; i++) {
      blockList[i].state = "pending";
    }
    this.setState({ blockList, searching: false });
  }

  handleSlider(sliderName, value) {
    switch (sliderName) {
      case "numBlocks":
        this.setState({
          numBlocks: value,
          targetSize: Math.min(value - 1, this.state.targetSize)
        });
        const blockList = getInitialBlockList(
          this.state.numBlocks,
          Math.min(value - 1, this.state.targetSize)
        );

        this.setState({ blockList });
        break;
      case "targetSize":
        const newBlockList = getInitialBlockList(
          this.state.numBlocks,
          value - 1
        );
        this.setState({
          blockList: newBlockList,
          targetSize: value - 1
        });
        break;
      case "speed":
        this.setState({
          speed: 200 - (value - 50) * 2
        });
        break;
      default:
    }
  }

  animate(actions) {
    this.clear();
    this.setState({ searching: true });
    let blockList = [...this.state.blockList];
    const { speed } = this.state;
    let timer = 0;

    for (let i = 0; i < actions.length; i++) {
      let todo = actions[i];
      let state = "pending";
      for (let j = 0; j < todo.length; j++) {
        let tmp = state;
        if (typeof todo[j] === "string") {
          state = todo[j];
        } else {
          setTimeout(() => {
            blockList[todo[j]].state = tmp;
            this.setState({ blockList });
          }, speed * timer);
        }
      }
      timer += 1;
    }
    setTimeout(() => {
      this.setState({ searching: false });
    }, speed * timer);
  }

  handleButton(selectedItem) {
    if (this.state.searching) {
      return;
    }
    this.clear();
    let actions = [];
    switch (selectedItem) {
      case "linearSearch":
        actions = linearSearch(this.state.blockList);
        break;
      case "jumpSearch":
        actions = jumpSearch(this.state.blockList);
        break;
      case "binarySearch":
        actions = binarySearch(this.state.blockList);
        break;
      case "interpolationSearch":
        actions = interpolationSearch(this.state.blockList);
        break;
      case "exponentialSearch":
        actions = exponentialSearch(this.state.blockList);
        break;
      case "fibonacciSearch":
        actions = fibonacciSearch(this.state.blockList);
        break;
      case "ternarySearch":
        actions = ternarySearch(this.state.blockList);
        break;
      default:
    }
    this.animate(actions);
  }

  render() {
    const { blockList } = this.state;

    return (
      <Column flexGrow={1} className="container">
        <Header
          onClick={selectedItem => this.handleButton(selectedItem)}
        ></Header>
        <Row className="main-block">
          <div className="block-list">
            {blockList.map((block, blockIdx) => {
              const { state, height } = block;
              return (
                <Block key={blockIdx} state={state} height={height}></Block>
              );
            })}
          </div>
        </Row>
        <Footer
          numBlocks={this.state.numBlocks}
          onChange={(sliderName, value) => this.handleSlider(sliderName, value)}
          searching={this.state.searching}
        ></Footer>
      </Column>
    );
  }
}

const getInitialBlockList = (numBlocks, targetSize) => {
  const blockList = [];
  blockList.push(createBlock(targetSize));
  blockList[0].state = "target";
  for (let i = 0; i < numBlocks; i++) {
    blockList.push(createBlock(i));
  }
  return blockList;
};

const createBlock = i => {
  return {
    state: "pending",
    height: PIXEL_WIDTH + i * INCREMENT
  };
};

export default App;
