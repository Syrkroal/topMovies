import React from "react";
import Enzyme, { shallow } from "enzyme";
import ActorCard from "../ActorCard/ActorCard";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("ActorCard to match snapshot", () => {
    const actor = {
        profile_path: "path",
        name: "name",
        character: "character",
    };

    const container = shallow(<ActorCard actor={actor} />);
    it("should match the snapshot", () => {
        expect(container.html()).toMatchSnapshot();
    });
});
