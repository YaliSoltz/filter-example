import React, { Component } from "react";
class Buttons extends Component {
  state = {
    arr: ["hodi", "hila", "yali", "yarden"],
    withStyle: false,
    whatType: "button",
  };

  render() {
    return (
      <div style={{ marginLeft: 10 }}>
        <div style={{ display: "flex", marginLeft: 4 }}>
          <input
            style={{ borderRadius: 10 }}
            id="in"
            type="text"
            placeholder="New button name"
          />
          <button className="btn m-2 btn-primary" onClick={this.addName}>
            Add
          </button>
          <form>
            <input
              onChange={this.changeStyle}
              className="form-check-input"
              type="checkbox"
              value=""
              id="apply_filltering"
            />
            <label className="form-check-label" htmlFor="apply_filltering">
              Apply Filtering
            </label>
          </form>
          <select
            onChange={(ev) => this.whatType(ev)}
            id="select1"
            aria-label="Default select example"
          >
            <option value="button">choose element</option>
            <option value="button">Button</option>
            <option value="label">Label</option>
            <option value="img">Img</option>
          </select>
        </div>
        <br />
        {this.state.arr.length == 0 && "please enter a value"}
        {this.state.arr.map((name, index) => this.generate(name, index))}
      </div>
    );
  }

  addName = () => {
    let x = document.getElementById("in").value;
    x
      ? this.state.arr.push(x)
      : alert("You need to put value in the textbox!!");
    this.setState({ arr: this.state.arr });
  };

  getClasses = (name) => {
    return "btn m-1 btn-" + (name.includes("a") ? "dark" : "primary");
  };

  changeStyle = () => {
    this.state.withStyle = !this.state.withStyle;
    this.setState({ withStyle: this.state.withStyle });
  };

  whatType = (ev) => {
    this.state.whatType = ev.target.value;
    this.setState({ whatType: this.state.whatType });
  };

  generate(name, index) {
    if (1 == 1) return
    <button
      key={index}
      className={this.state.withStyle ? this.getClasses(name) : ""}
    >
      {name}
    </button>;
  }
}

export default Buttons;
