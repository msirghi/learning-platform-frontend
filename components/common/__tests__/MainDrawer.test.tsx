import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { MainDrawer } from "../MainDrawer";

describe("MainDrawer component", () => {
  const props = {
    handleDrawerClose: jest.fn(),
    open: false,
    mobileOpen: true,
  };

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should render container on no active tab", () => {
    const wrapper = shallow(<MainDrawer {...props} />);
    const div = wrapper.find("div");
    expect(div).toHaveLength(1);
  });

  it("should render match the snapshot on defined active tab", () => {
    Object.defineProperty(window, "location", {
      value: {
        href: "/home",
      },
    });
    const wrapper = mount(<MainDrawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
