import React from "react";
import Enzyme, { shallow } from "enzyme";
import Home from "../Home";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Home to match snapshot", () => {
    const container = shallow(<Home />);
    it("should match the snapshot", () => {
        expect(container.html()).toMatchSnapshot();
    });
});
