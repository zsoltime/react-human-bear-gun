export const stringOrNull = (props, propName, componentName) => {
  const propValue = props[propName];

  if (propValue === null || typeof propValue === 'string') {
    return;
  }

  return new Error(
    `Invalid prop \`${propName}\` of type \`${typeof propValue}\` supplied to \`${componentName}\`, expected \`string\` or \`null\`.`
  );
};
