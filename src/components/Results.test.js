import React from 'react';
import { shallow } from 'enzyme';

import Results from './Results';

const CHOICES = ['Human', 'Bear', 'Gun'];

describe('<Results />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Results
        computerChoice={CHOICES[0]}
        userChoice={CHOICES[1]}
        points={{ computer: 3, user: 5 }}
        result="Result text"
        winner="user"
      />
    );

    expect(wrapper.find('.results')).toMatchSnapshot();
  });
});
