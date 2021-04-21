import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import { createShallow, createMount } from '@material-ui/core/test-utils';

describe('App', () => {

  it('Should have form', () => {
    const wrapper = shallow(<App 
      />);
    console.log(wrapper.debug());
    expect(wrapper.find('form').length).toEqual(1);
  });

  // it('Should have a button that works', () => {
  //   const wrapper = createShallow(<App 
  //     />);
  //   console.log(wrapper.debug());
  //   expect(wrapper.find()).toEqual(1);
  // });

});
