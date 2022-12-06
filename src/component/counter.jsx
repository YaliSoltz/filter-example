import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };

  style = {
    fontSize: 50,
    backgroundColor: "blue",
  };

  constructor(){
    super();
    this.countPlus = this.countPlus.bind(this)
    this.countMinus = this.countMinus.bind(this)
    
  }

  render() {
    return (
      <div>
        
        <h1 style={this.style} className={this.changeBG()}>
          {this.formatCount()}
        </h1>
        <br />
        <button
          onClick={() => this.countPlus()}
          className="btn btn-dark btn-lg m-2"> + </button>
        <button 
          disabled={this.buttonDis()}
          onClick={() => this.countMinus()}
          className="btn btn-danger btn-lg m-2"> - </button>
          <button className="btn btn-secondary btn-lg m-2" onClick={() => this.hanndleIncrement()}>&#129409;</button>
      </div>
    );
  }

  changeBG() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  countPlus() {
    this.setState({ count: this.state.count + 1 });
  }

  countMinus() {
    this.setState({ count: this.state.count - 1 });
  }

  buttonDis() {
    if (this.state.count <= 0) return "disabled";
  }

  hanndleIncrement(){
    alert(this.state.count)
  }
}

export default Counter;
