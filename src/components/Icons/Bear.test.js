import React from 'react';
import { shallow } from 'enzyme';

import Bear from './Bear';

describe('<Bear /> icon', () => {
  it('passes className and size props to the svg element', () => {
    const className = 'large-bear';
    const size = '256px';
    const wrapper = shallow(
      <Bear className={className} size={size} />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
  });
});
