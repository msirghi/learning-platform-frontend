import { shallow } from "enzyme";
import React from "react";
import { AlertType } from "../../../common/enums";
import { AlertMessage } from "../AlertMesssage";
import Alert from "@material-ui/lab/Alert";
import toJson from "enzyme-to-json";

describe("AlertMessage component", () => {
  const renderAlert = (type: AlertType) => {
    const wrapper = shallow(<AlertMessage type={type} message={"Message"} />);
    return wrapper.find(Alert);
  };

  it("should match the snapshot", () => {
    const wrapper = shallow(<AlertMessage type={AlertType.ERROR} message={"Message"} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render error alert", () => {
    const alert = renderAlert(AlertType.ERROR);
    expect(alert.props().severity).toBe(AlertType.ERROR);
  });

  it("should render a success alert", () => {
    const alert = renderAlert(AlertType.SUCCESS);
    expect(alert.props().severity).toBe(AlertType.SUCCESS);
  });

  it("should render a warninng alert", () => {
    const alert = renderAlert(AlertType.WARNING);
    expect(alert.props().severity).toBe(AlertType.WARNING);
  });

  it("should render info alert", () => {
    const alert = renderAlert(AlertType.INFO);
    expect(alert.props().severity).toBe(AlertType.INFO);
  });
});
