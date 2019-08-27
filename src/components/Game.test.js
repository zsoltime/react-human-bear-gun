import React from 'react';
import { shallow } from 'enzyme';

import Game, { getResult } from './Game';

describe('<Game />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Game />);

    expect(wrapper).toMatchSnapshot();
  });

  // TODO: More tests :)
});

describe('getResult()', () => {
  it('returns the correct winner', () => {
    const CHOICES = ['Human', 'Bear', 'Gun'];
    const algo = [
      { user: CHOICES[0], computer: CHOICES[0], winner: null },
      { user: CHOICES[1], computer: CHOICES[0], winner: 'user' },
      { user: CHOICES[2], computer: CHOICES[0], winner: 'computer' },
      { user: CHOICES[0], computer: CHOICES[1], winner: 'computer' },
      { user: CHOICES[1], computer: CHOICES[1], winner: null },
      { user: CHOICES[2], computer: CHOICES[1], winner: 'user' },
      { user: CHOICES[0], computer: CHOICES[2], winner: 'user' },
      { user: CHOICES[1], computer: CHOICES[2], winner: 'computer' },
      { user: CHOICES[2], computer: CHOICES[2], winner: null },
    ];

    for (let i = 0; i < algo.length; i++) {
      const result = getResult(algo[i].user, algo[i].computer);

      expect(result.winner).toBe(algo[i].winner);
    }
  });
});
