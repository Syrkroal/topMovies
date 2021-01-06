import React from "react";
import Enzyme, { shallow } from "enzyme";
import MoviePoster from "../MoviePoster/MoviePoster";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("MoviePoster to match snapshot", () => {
    const movie = {
        poster_path: "path",
        title: "title",
    };
    const container = shallow(<MoviePoster movie={movie} />);
    it("should match the snapshot", () => {
        expect(container.html()).toMatchSnapshot();
    });
});
