import React, { Component } from "react";
class Filter extends Component {
  state = {
    people: [
      "Shashi Koshy",
      "Dhriti Taneja",
      "Dipa Mishra",
      "Ansh Thakkar",
      "Lakshmi Thaker",
      "Sushila Matthai",
      "Shresth Nigam",
      "Bhavana Biswas",
      "Vasudha Mangat",
      "Priya Saran",
      "Rag yolo",
    ],
    includes: false,
    length: false,
    start: false,
  };
  
  render() {
    let newPeople = this.state.people

    if(this.state.includes)
        newPeople = newPeople.filter(name => name.includes('r') || name.includes('R'))

    if(this.state.length)
        newPeople = newPeople.filter(name => name.length>14)

    if(this.state.start)
        newPeople = newPeople.filter(name => name.includes('Bh'))
        
    
    return (
      <React.Fragment>
        <input
          onChange={() => this.includes()}
          className="form-check-input"
          type="checkbox"
          name=""
          id="includes"
        />
        <label className="form-check-label" htmlFor="includes">
          includes R or r
        </label>
        <br />
        <input
          onChange={() => this.length()}
          className="form-check-input"
          type="checkbox"
          name=""
          id="length"
        />
        <label className="form-check-label" htmlFor="length">
          length{">"}14
        </label>
        <br />
        <input
          onChange={() => this.start()}
          className="form-check-input"
          type="checkbox"
          name=""
          id="start"
        />
        <label className="form-check-label" htmlFor="start">
          start with bh
        </label>
        <br />
        <br />
        <ul>
          {newPeople.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
    
    
};
includes = () => this.setState({includes: !this.state.includes});
length = () => this.setState({length: !this.state.length});
start = () => this.setState({start: !this.state.start})
}

export default Filter;
