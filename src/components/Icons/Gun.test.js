import React from 'react';
import { shallow } from 'enzyme';

import Gun from './Gun';

describe('<Gun /> icon', () => {
  it('passes className and size props to the svg element', () => {
    const className = 'tiny-gun';
    const size = '8px';
    const wrapper = shallow(
      <Gun className={className} size={size} />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
  });
});
