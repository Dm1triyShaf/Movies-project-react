import React from 'react';
import { Movies } from '../components/Movies';

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=e5430642&s=MATRIX')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        {
        movies.length ? (
          <Movies movies={this.state.movies} />
        ) : 
          <h3>Loadind...</h3>
        }
      </main>
    );
  }
}

export { Main };
