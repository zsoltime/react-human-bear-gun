import React from 'react';
import { shallow } from 'enzyme';

import RadioBox from './RadioBox';

const CHOICES = ['Human', 'Bear', 'Gun'];

describe('<RadioBox />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <RadioBox
        choice={CHOICES[0]}
        userChoice={CHOICES[1]}
        onChange={console.log}
      />
    );

    expect(wrapper.find('Fragment')).toMatchSnapshot();
  });

  it('renders the correct icon', () => {
    const wrapper = shallow(
      <RadioBox
        choice={CHOICES[0]}
        userChoice={CHOICES[1]}
        onChange={console.log}
      />
    );

    expect(wrapper.find('Icon').prop('type')).toBe(CHOICES[0]);
  });

  it('renders the checkbox as checked if choice is the same as userChoice', () => {
    const wrapper = shallow(
      <RadioBox
        choice={CHOICES[1]}
        userChoice={CHOICES[1]}
        onChange={console.log}
      />
    );

    expect(wrapper.find('input').prop('checked')).toBe(true);
    expect(wrapper.find('label').prop('className')).toMatch('active');
  });

  it('calls onChange prop on change', () => {
    const handleChange = jest.fn();

    const wrapper = shallow(
      <RadioBox
        choice={CHOICES[0]}
        userChoice={CHOICES[2]}
        onChange={handleChange}
      />
    );

    wrapper.find('input').simulate('change');
    expect(handleChange).toBeCalledTimes(1);
  });
});
