import React from 'react';
import { shallow } from 'enzyme';

import Icon from '.';

const ICONS = ['Bear', 'Gun', 'Human', 'Reset', 'Think'];

describe('<Icon /> icons by type', () => {
  it('renders the correct icon', () => {
    for (let i = 0; i < ICONS.length; i++) {
      const wrapper = shallow(<Icon type={ICONS[i]} />);
      const RenderedIcon = wrapper.find(ICONS[i]);

      expect(RenderedIcon.length).toBe(1);
    }
  });

  it('passes props down', () => {
    for (let i = 0; i < ICONS.length; i++) {
      const wrapper = shallow(<Icon type={ICONS[i]} propOne={7} />);
      const RenderedIcon = wrapper.find(ICONS[i]);

      expect(RenderedIcon.prop('propOne')).toBe(7);
    }
  });
});
