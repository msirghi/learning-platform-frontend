import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { UserAvatar } from "../UserAvatar";

describe("UserAvatar component", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<UserAvatar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should return img on prop existance", () => {
    const wrapper = shallow(<UserAvatar img='text' />);
    const img = wrapper.find("img");
    expect(img).toHaveLength(1);
    expect(img.props().src).toBe("text");
  });
});
