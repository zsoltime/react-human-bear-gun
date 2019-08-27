import React from 'react';
import { shallow } from 'enzyme';

import Think from './Think';

describe('<Think /> icon', () => {
  it('passes className and size props to the svg element', () => {
    const className = 'big-think';
    const size = '384px';
    const wrapper = shallow(
      <Think className={className} size={size} />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
  });
});
