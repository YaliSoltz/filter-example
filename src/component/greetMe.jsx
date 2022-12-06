import React, { Component } from "react";
class GreetMe extends Component {
  state = {
    firstName: "PLEASE INSERT YOUR NAME",
    lastName: "",
    gender: ''
  };
  render() {
    return (
      <div>
        <form className="text-center">
            
          <input onChange={() => this.state.gender = 'Mr.'}
            className="form-check-input"
            type="radio"
            name="genderRadio"
            id="men"
          />
          <label className="form-check-label" htmlFor="men">
            Men
          </label>
          
          <input onChange={() => this.state.gender = 'Mrs.'}
            className="form-check-input"
            type="radio"
            name="genderRadio"
            id="women"
          />
          <label className="form-check-label" htmlFor="women">
            Women
          </label>
          <br />
          



          <input
           
            className="bg-body rounded mb-1"
            onChange={(ev) => (this.state.firstName = ev.target.value)}
            id="first_name"
            type="text"
            placeholder="First name"
          />
          <br />
          <input
          className="bg-body rounded mb-1"
            onChange={(ev) => (this.state.lastName = ev.target.value)}
            id="last_name"
            type="text"
            placeholder="Last name"
          />
          <br />

          <button
          style={{width: 188}}
            className="btn btn-danger shadow-lg p-2"
            onClick={() =>
              alert(
                "Hello " + this.state.gender + ' '+
                  this.state.firstName +
                  " " +
                  this.state.lastName +
                  "!"
              )
            }
            
          >
            GREET ME
          </button>
        </form>
      </div>
    );
  }
}

export default GreetMe;
