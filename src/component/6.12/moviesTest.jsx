import React, { Component } from "react";
import Movietest from "./movieTest";
class Moviestest extends Component {
  state = {
    movies: [
      {
        index: 0,
        id: 121,
        name: "shrek",
        length: "2:22",
        genre: "comedy",
      },
      {
        index: 1,
        id: 14,
        name: "iron man",
        length: "1:45",
        genre: "fantazy",
      },
      {
        index: 2,
        id: 111,
        name: "gigi",
        length: "3:10",
        genre: "action",
      },
      {
        index: 3,
        id: 353,
        name: "titanic",
        length: "3:40",
        genre: "drama",
      },
    ],
    newMovie: { index: 1, id: 1, name: "", length: "", genre: "" },
  };
  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>#Index</th>
              <th>Id</th>
              <th>Name</th>
              <th>Length</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => {
              return (
                <Movietest
                  key={movie.id}
                  id={movie.id}
                  name={movie.name}
                  length={movie.length}
                  genre={movie.genre}
                  color={this.whatColor(index + 1)}
                  index={index}
                  delete={() => this.delete(movie.id)}
                  patch={() => this.patch(index)}
                />
              );
            })}
          </tbody>
        </table>
        <h2>New movie</h2>
        <form style={{ display: "flex", flexDirection: "column", width: 200 }}>
          <input
            onChange={(ev) =>
              (this.state.newMovie.id = parseInt(ev.target.value))
            }
            type="text"
            placeholder="Id.."
          />
          <input
            onChange={(ev) => (this.state.newMovie.name = ev.target.value + "")}
            type="text"
            placeholder="Name.."
          />
          <input
            onChange={(ev) =>
              (this.state.newMovie.length = ev.target.value + "")
            }
            type="text"
            placeholder="Length.."
          />
          <input
            onChange={(ev) =>
              (this.state.newMovie.genre = ev.target.value + "")
            }
            type="text"
            placeholder="Genre.."
          />
        </form>
        <button className="btn btn-primary" onClick={this.addNewMovie}>
          Add
        </button>
      </React.Fragment>
    );
  }
  delete = (val) => {
    let movies = this.state.movies.filter((movie) => movie.id != val);
    this.setState({ movies });
  };

  patch = (val) => {
    this.state.movies[val].name = "null";
    this.setState({ movies: this.state.movies });
  };

  whatColor = (val) => {
    if (val % 4 == 1) return "alert alert-primary";
    else if (val % 4 == 2) return "alert alert-danger";
    else if (val % 4 == 3) return "alert alert-warning";
    else if (val % 4 == 0) return "alert alert-dark";
  };

  addNewMovie = () => {
    this.state.movies.push(this.state.newMovie);
    this.setState({ movies: this.state.movies });
  };
}

export default Moviestest;
