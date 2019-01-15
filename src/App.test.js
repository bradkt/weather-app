import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";

configure({ adapter: new Adapter() });

describe("Movie.js", () => {
  let AppWrap;

  beforeEach(() => {
    AppWrap = shallow(<App />);
  });

  it("shouldDisplayResults should be false", () => {
    // Arrange

    // Act

    // Assert
    expect(AppWrap).toMatchSnapshot();
  });
});
