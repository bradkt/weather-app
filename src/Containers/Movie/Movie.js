import React, { Component } from "react";
import { MovieForm } from "../../Components/Forms";
import Placeholder from "../../Components/PlaceHolder";
import DarkBox from "../../Components/UI/DarkBox";
import Response from "../../Components/Response";
import { movieDataAPIKeyV3 } from "../../Requests/movieData";
import { movieSearchURLBuilder, movieURLBuilder } from "../../Utils";
import { MockMovieData, MockMovieDetails } from "../../Requests/fetchData";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Movie extends Component {
  state = {
    MovieSearchApiURL: "https://api.themoviedb.org/3/search/movie?",
    MovieApiURL: "https://api.themoviedb.org/3/movie/",
    MovieDisplayData: null,
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
    return FullURL;
  };

  createMovieDetailsURL = movieID => {
    let FullDetailURL = movieURLBuilder(
      this.state.MovieApiURL,
      movieID,
      movieDataAPIKeyV3
    );
    this.getMovieDetails(FullDetailURL, MockMovieDetails);
    return FullDetailURL;
  };

  getMovieData = (fullURL, RequestHandler) => {
    let _this = this;
    RequestHandler.GET(fullURL)
      .then(function(data) {
        _this.setMovieData(data);
        return data;
      })
      .catch(function(error) {
        _this.DisplayRequestError();
        console.log(error);
        return { error: error };
      });
  };

  setMovieData = data => {
    let tempData = [];

    data.results.map((movie, i) => {
      tempData[i] = {
        value: movie.original_title,
        id: movie.id
      };
    });

    tempData["Matches"] = data.total_results;

    this.setState({
      MovieData: { ...tempData }
    });

    tempData = [];

    this.shouldDisplayMovieData();
  };

  getMovieDetails = (fullURL, RequestHandler) => {
    let _this = this;
    RequestHandler.GET(fullURL)
      .then(function(data) {
        _this.setMovieDetailData(data);
        return data;
      })
      .catch(function(error) {
        _this.DisplayRequestError();
        console.log(error);
        return { error: error };
      });
  };

  setMovieDetailData = data => {
    this.setState({
      MovieDetailData: {
        title: { value: data.title },
        homepage: { value: data.homepage },
        release_date: { value: data.release_date },
        revenue: { value: data.revenue },
        runtime: { value: data.runtime },
        vote_average: { value: data.vote_average },
        vote_count: { value: data.vote_count }
      }
    });

    this.shouldDisplayMovieData();
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
    this.setState({
      MovieData: null
    });
  };

  render() {
    return (
      <div>
        <ErrorBoundary>
          <MovieForm
            getFormValues={this.createURL}
            optionToggle={this.state.displayResults}
          />
          <DarkBox color="black">
            {this.state.displayResults ? (
              <Response
                DTO={this.state.MovieData || this.state.MovieDetailData}
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
        </ErrorBoundary>
      </div>
    );
  }
}

export default Movie;
