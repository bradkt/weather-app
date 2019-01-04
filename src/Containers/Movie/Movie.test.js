import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
import Movie from "./Movie";
import { MockMovieData, MockMovieDetails } from "../../Requests/fetchData";
import {
  fakeMoiveDatabySearch,
  fakeMoiveDatabyID
} from "../../Requests/movieData";
import Response from "../../Components/Response";

configure({ adapter: new Adapter() });

describe("Movie.js", () => {
  let MovieWrap;

  beforeEach(() => {
    MovieWrap = shallow(<Movie />);
  });

  it("shouldDisplayResults should be false", () => {
    // Arrange

    // Act

    // Assert
    expect(MovieWrap.state().displayResults).toBe(false);
  });

  it("should create a proper search URL", () => {
    // Arrange

    // Act
    let FullSearchURL = MovieWrap.instance().createURL("back to the future");
    // Assert
    expect(FullSearchURL).toBe(
      "https://api.themoviedb.org/3/search/movie?api_key=6f3a1bef2816aa6352efacdebf1b4ac5&query=back+to+the+future"
    );
  });

  it("should create a proper details URL", () => {
    // Arrange

    // Act
    let FullDetailsURL = MovieWrap.instance().createMovieDetailsURL("550");
    // Assert
    expect(FullDetailsURL).toBe(
      "https://api.themoviedb.org/3/movie/550?api_key=6f3a1bef2816aa6352efacdebf1b4ac5"
    );
  });

  it("should set the proper movie data after api search request", () => {
    // Arrange

    // Act
    MovieWrap.instance().setMovieData(fakeMoiveDatabySearch);

    // Assert
    setTimeout(() => {
      expect(MovieWrap.state().movieData).toEqual({});
    }, 1100);
  });

  it("should be able to fetch search data", () => {
    // Arrange

    // Act
    let result = MovieWrap.instance().getMovieData("some-url", MockMovieData);
    // Assert
    setTimeout(() => {
      expect(result).toEqual(fakeMoiveDatabySearch);
    }, 900);
  });

  it("should set the proper movie detials data after api id request", () => {
    // Arrange

    // Act
    MovieWrap.instance().setMovieDetailData(fakeMoiveDatabyID);

    // Assert
    expect(MovieWrap.state().MovieDetailData).toEqual({
      homepage: {
        value: "http://www.foxmovies.com/movies/fight-club"
      },
      release_date: {
        value: "1999-10-15"
      },
      revenue: {
        value: 100853753
      },
      runtime: {
        value: 139
      },
      title: {
        value: "Fight Club"
      },
      vote_average: {
        value: 8.4
      },
      vote_count: {
        value: 14549
      }
    });
  });

  it("should be able to fetch details data", () => {
    // Arrange

    // Act
    let result = MovieWrap.instance().getMovieDetails(
      "some-url",
      MockMovieDetails
    );
    // Assert
    setTimeout(() => {
      expect(result).toEqual(fakeMoiveDatabyID);
    }, 900);
  });

  it("should be display the results page if display data is true", () => {
    // Arrange

    // Act
    expect(MovieWrap.find(Response).length).toBe(0);

    MovieWrap.setState({ displayResults: true });
    // Assert
    expect(MovieWrap.find(Response).length).toBe(1);
  });

  it("calling shouldDisplayMovieData should toggle bool value", () => {
    // Arrange

    // Act
    MovieWrap.instance().shouldDisplayMovieData();
    // Assert
    expect(MovieWrap.state().displayResults).toBe(true);
  });

  it("calling movieClicked should toggle display and null MovieData state value", () => {
    // Arrange
    MovieWrap.instance().shouldDisplayMovieData();
    // Act
    MovieWrap.instance().movieClicked();
    expect(MovieWrap.state().displayResults).toBe(false);
    // Assert

    expect(MovieWrap.state().MovieData).toBe(null);
  });
});
