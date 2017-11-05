import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Rating from '../src/components/Rating';
import Circle from '../src/components/Circle';
import Animation from '../src/components/Animation';
import Pikachu from '../src/components/Pikachu';


describe('Rating', () => {
  it('sets the increasing state correctly', () => {
    const wrapper = shallow(<Rating rating={1} />);
    wrapper.setProps({ rating: 2 });
    expect(wrapper.state()).to.deep.equal({ increasing: true, decreasing: false });
  });

  it('sets the increasing state correctly', () => {
    const wrapper = shallow(<Rating rating={1} />);
    wrapper.setProps({ rating: -4 });
    expect(wrapper.state()).to.deep.equal({ increasing: false, decreasing: true });
  });

  it('sets the stable state correctly', () => {
    const wrapper = shallow(<Rating rating={1} />);
    wrapper.setProps({ rating: 1 });
    expect(wrapper.state()).to.deep.equal({ increasing: false, decreasing: false });
  });
});

describe('Circle', () => {
  it('does not re-render when the same color is passed in twice', () => {
    const spy = sinon.spy(Circle.prototype, 'render')
    const wrapper = shallow(<Circle color='red' />);
    wrapper.setProps({ color: 'red' });
    expect(spy.calledOnce).to.be.true;
  });
});
