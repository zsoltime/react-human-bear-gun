export const stringOrNull = (props, propName, componentName) => {
  const propValue = props[propName];

  if (propValue === null || typeof propValue === 'string') {
    return;
  }

  return new Error(`${componentName} only accepts null or string`);
};
