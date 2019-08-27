import React from 'react';
import { shallow } from 'enzyme';

import Reset from './Reset';

describe('<Reset /> icon', () => {
  it('passes className and size props to the svg element', () => {
    const className = 'p-reset';
    const size = '32px';
    const wrapper = shallow(
      <Reset className={className} size={size} />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
  });
});
