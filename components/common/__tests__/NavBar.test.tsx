import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { NavBar } from "../NavBar";
import IconButton from "@material-ui/core/IconButton";

describe("NavBar component", () => {
  const props = {
    classes: { nav: "nav" },
    open: true,
    handleDrawerOpen: jest.fn(),
  };

  it("should match the snapshot", () => {
    const wrapper = shallow(<NavBar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should fire handleDrawerOpen prop on icon button click", () => {
    const wrapper = shallow(<NavBar {...props} />);
    const icon = wrapper.find(IconButton).at(0);
    icon.simulate("click");
    expect(props.handleDrawerOpen).toHaveBeenCalled();
  });
});
