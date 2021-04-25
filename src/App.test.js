import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import {Button} from "@material-ui/core/Button";
import { createShallow, createMount } from '@material-ui/core/test-utils';

describe('App', () => {
  // let shallow;

  // beforeAll(() => { 
  //   shallow = createShallow();
  // });

  it('Should have form', () => {
    const wrapper = shallow(<App 
      />);
    // console.log(wrapper.debug());
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('Should have a button that works', () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button onClick={mockCallBack}/>);
    button.find('Button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
    // const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
    // expect(wrapper.find('Button').simulate('click')).toEqual(1);
  // });
});
