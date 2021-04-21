import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";

describe('App', () => {

  it('Should have form', () => {
    const wrapper = shallow(<App 
      />);
    expect(wrapper.find('form').length).toEqual(1);
  });

});
