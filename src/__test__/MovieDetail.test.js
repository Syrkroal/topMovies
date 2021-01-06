import React from "react";
import Enzyme, { shallow } from "enzyme";
import MovieDetail from "../MovieDetail/MovieDetail";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
    useLocation: jest.fn().mockReturnValue({
        state: {
            movie: {
                id: "1",
                title: "title",
                overview: "overview",
                vote_average: "5",
            },
        },
    }),
}));

describe("MovieDetail to match snapshot", () => {
    const container = shallow(<MovieDetail />);
    it("should match the snapshot", () => {
        expect(container.html()).toMatchSnapshot();
    });
});
