import React from "react";
import "./sorting.css";
import { mergeSort } from "./Sorting Algorithms/MergeSort";
import { quickSort } from "./Sorting Algorithms/QuickSort";
import { bubblesort } from "./Sorting Algorithms/BubbleSort";
import { insertionSort } from "./Sorting Algorithms/InsertionSort";
const COLOR1 = "turquoise";
const COLOR2 = "red";
const AnimationDuration = 4;

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array.push(this.randomNumber(10, 600));
    }
    this.setState({ array });
  }
  randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }

  mergeSortVisualizer() {
    const VisualizerArray = mergeSort(this.state.array);

    for (let i = 0; i < VisualizerArray.length; i++) {
      const bars = document.getElementsByClassName("array-bar");
      const whichColor = i % 3 !== 2;
      if (whichColor) {
        const [var1, var2] = VisualizerArray[i];
        const barAtVar1 = bars[var1].style;
        const barAtvar2 = bars[var2].style;
        const color = i % 3 === 0 ? COLOR2 : COLOR1;
        setTimeout(() => {
          barAtVar1.backgroundColor = color;
          barAtvar2.backgroundColor = color;
        }, i * AnimationDuration);
      } else {
        setTimeout(() => {
          const [some, newHeight] = VisualizerArray[i];
          const bar = bars[some].style;
          bar.height = `${newHeight}px`;
        }, i * AnimationDuration);
      }
    }
  }
  ////////////////////////////////////////-----------------QUICK-----SORT-----ALGORITHM-----------------////////////////////////////
  quicksortVisualizer() {
    const VisualizerArray = quickSort(
      this.state.array,
      0,
      this.state.array.length - 1
    );

    for (let i = 0; i < VisualizerArray.length; i++) {
      const bars = document.getElementsByClassName("array-bar");
      const whichColor = i % 3 !== 2;

      if (whichColor) {
        const [var1, var2] = VisualizerArray[i];
        const barAtVar1 = bars[var1].style;
        const barAtvar2 = bars[var2].style;
        const color = i % 3 === 0 ? COLOR2 : COLOR1;
        setTimeout(() => {
          barAtVar1.backgroundColor = color;
          barAtvar2.backgroundColor = color;
        }, i * AnimationDuration);
      } else {
        setTimeout(() => {
          const [first, second] = VisualizerArray[i];
          const bar1 = bars[first[0]].style;
          const bar2 = bars[second[0]].style;
          bar1.height = `${first[1]}px`;
          bar2.height = `${second[1]}px`;
        }, i * AnimationDuration);
      }
    }
  }

  bubblesortVisualizer() {
    const VisualizerArray = bubblesort(this.state.array);

    for (let i = 0; i < VisualizerArray.length; i++) {
      const bars = document.getElementsByClassName("array-bar");
      const whichColor = i % 3 !== 2;

      if (whichColor) {
        const [var1, var2] = VisualizerArray[i];
        const barAtVar1 = bars[var1].style;
        const barAtvar2 = bars[var2].style;
        const color = i % 3 === 0 ? COLOR2 : COLOR1;
        setTimeout(() => {
          barAtVar1.backgroundColor = color;
          barAtvar2.backgroundColor = color;
        }, i * 0.5);
      } else {
        setTimeout(() => {
          const [first, second] = VisualizerArray[i];
          const bar1 = bars[first[0]].style;
          const bar2 = bars[second[0]].style;
          bar1.height = `${first[1]}px`;
          bar2.height = `${second[1]}px`;
        }, i * 0.5);
      }
    }
  }

  insertionSortVisualizer() {
    const VisualizerArray = insertionSort(this.state.array);

    for (let i = 0; i < VisualizerArray.length; i++) {
      const bars = document.getElementsByClassName("array-bar");
      const whichColor = i % 3 !== 2;

      if (whichColor) {
        const [var1, var2] = VisualizerArray[i];
        const barAtVar1 = bars[var1].style;
        const barAtvar2 = bars[var2].style;
        const color = i % 3 === 0 ? COLOR2 : COLOR1;
        setTimeout(() => {
          barAtVar1.backgroundColor = color;
          barAtvar2.backgroundColor = color;
        }, i * 0.5);
      } else {
        setTimeout(() => {
          const [first, second] = VisualizerArray[i];
          const bar1 = bars[first[0]].style;
          const bar2 = bars[second[0]].style;
          bar1.height = `${first[1]}px`;
          bar2.height = `${second[1]}px`;
        }, i * 0.5);
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className="container" style={{ marginTop: "15px" }}>
        {array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px`, backgroundColor: COLOR1 }}
          ></div>
        ))}

        <button
          style={{ display: "block", margin: "10px", padding: "3px" }}
          onClick={() => this.resetArray()}
        >
          Generate New Array
        </button>
        <button
          style={{
            display: "inline-block",
            margin: "4px",
            marginBottom: "2px",
            padding: "3px",
          }}
          onClick={() => this.mergeSortVisualizer()}
        >
          Merge Sort
        </button>
        <button
          style={{ display: "inline-block", margin: "4px", padding: "3px" }}
          onClick={() => this.quicksortVisualizer()}
        >
          Quick Sort
        </button>
        <button
          style={{ display: "inline-block", margin: "4px", padding: "3px" }}
          onClick={() => this.bubblesortVisualizer()}
        >
          Bubble Sort
        </button>
        <button
          style={{ display: "inline-block", margin: "4px", padding: "3px" }}
          onClick={() => this.insertionSortVisualizer()}
        >
          Insertion Sort
        </button>
      </div>
    );
  }
}
