import React from "react";
import axios from "axios";
import Movie from "./Movie";
//import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    //변하는 데이터
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 1000);

    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    const { movies } = this.state;
    return (
      <section className="container">
        <div>
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default App;