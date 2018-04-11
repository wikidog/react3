import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)} />
        <span className="input-group-btn">
          <button typ="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

  onFormSubmit(event) {
    event.preventDefault();

    // we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });  // clear the input

  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

}

// function mapStateToProps(state) {
//   return {
//     books: state.books
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
