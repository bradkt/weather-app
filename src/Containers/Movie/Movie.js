import React, { Component } from "react";
import { MovieForm } from "../../Components/Forms";
import Placeholder from "../../Components/PlaceHolder";
import DarkBox from "../../Components/UI/DarkBox";
import Response from "../../Components/Response";
import { movieDataAPIKeyV3 } from "../../Requests/movieData";
import MovieAPI, {
  MockMovieData,
  MockMovieDetails
} from "../../Requests/fetchData";
import { movieSearchURLBuilder, movieURLBuilder } from "../../Utils";

class Movie extends Component {
  state = {
    MovieSearchApiURL: "https://api.themoviedb.org/3/search/movie?",
    MovieApiURL: "https://api.themoviedb.org/3/movie/",
    MovieData: [],
    MovieDetailData: {},
    displayResults: false,
    requestHadError: false,
    clearForm: false
  };

  createURL = movieTitle => {
    let FullURL = movieSearchURLBuilder(
      this.state.MovieSearchApiURL,
      movieTitle,
      movieDataAPIKeyV3
    );
    this.getMovieData(FullURL, MockMovieData);
  };

  getMovieData = (fullURL, RequestHandler) => {
    let _this = this;
    RequestHandler.GET(fullURL)
      .then(function(data) {
        _this.setMovieData(data);
      })
      .catch(function(error) {
        _this.DisplayRequestError();
        console.log(error);
      });
  };

  setMovieData = data => {
    let tempData = [];

    data.results.map((movie, i) => {
      tempData[i] = {
        value: movie.original_title,
        id: movie.id,
        ind: i
      };
    });

    tempData["Matches"] = data.total_results;

    this.setState({
      MovieData: { ...tempData }
    });
    console.log(this.state);
    tempData = [];

    this.shouldDisplayMovieData();
  };

  setMovieDetailsData = data => {
    console.log(data);
  };

  shouldDisplayMovieData = () => {
    this.setState(prevState => ({ displayResults: !prevState.displayResults }));
  };

  DisplayRequestError = () => {
    let _this = this;
    _this.setState({
      requestHadError: true
    });
    setTimeout(function() {
      _this.setState({
        requestHadError: false
      });
    }, 3500);
  };

  movieClicked = movieID => {
    this.createMovieDetailsURL(movieID);
    this.shouldDisplayMovieData();
  };

  getMovieDetails = (fullURL, RequestHandler) => {
    let _this = this;
    RequestHandler.GET(fullURL)
      .then(function(data) {
        _this.setMovieDetailsData(data);
      })
      .catch(function(error) {
        _this.DisplayRequestError();
        console.log(error);
      });
  };

  createMovieDetailsURL = movieID => {
    let FullURL = movieURLBuilder(
      this.state.MovieApiURL,
      movieID,
      movieDataAPIKeyV3
    );
    this.getMovieDetails(FullURL, MockMovieDetails);
  };

  render() {
    return (
      <div>
        <MovieForm getFormValues={this.createURL} />
        <DarkBox color="black">
          {this.state.displayResults ? (
            <Response
              DTO={this.state.MovieData}
              clicked={this.shouldDisplayMovieData}
              movieClicked={this.movieClicked}
            />
          ) : (
            <Placeholder
              message={
                this.state.requestHadError
                  ? `This Request Had an Error`
                  : `Enter a location above to get started`
              }
            />
          )}
        </DarkBox>
      </div>
    );
  }
}

export default Movie;
