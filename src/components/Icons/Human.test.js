import React from 'react';
import { shallow } from 'enzyme';

import Human from './Human';

describe('<Human /> icon', () => {
  it('passes className and size props to the svg element', () => {
    const className = 'huge-human';
    const size = '512px';
    const wrapper = shallow(
      <Human className={className} size={size} />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
  });
});
