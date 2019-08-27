import { stringOrNull } from './helpers';

describe('stringOrNull prop type', () => {
  it('returns undefined if prop is string or null', () => {
    const props = {
      str: 'Test string',
      nil: null,
    };

    expect(stringOrNull(props, 'str', 'TestComponent')).toBe(
      undefined
    );
    expect(stringOrNull(props, 'nil', 'TestComponent')).toBe(
      undefined
    );
  });

  it('returns new Error if prop is not a string or not null', () => {
    const props = {
      truthyBool: true,
      falsyBool: false,
      fn: () => null,
      num: 57,
      obj: { a: 5, b: null },
      sym: Symbol('sym'),
    };

    for (const propName of Object.keys(props)) {
      expect(
        stringOrNull(props, propName, 'TestComponent')
      ).toBeInstanceOf(Error);
      expect(
        stringOrNull(props, propName, 'TestComponent').message
      ).toMatchSnapshot();
    }
  });
});
