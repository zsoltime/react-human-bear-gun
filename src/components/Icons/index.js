import React from 'react';
import PropTypes from 'prop-types';

import Bear from './Bear';
import Gun from './Gun';
import Human from './Human';
import Reset from './Reset';
import Think from './Think';

const Icon = ({ type, ...props }) => {
  switch (type) {
    case 'Bear':
      return <Bear {...props} />;

    case 'Gun':
      return <Gun {...props} />;

    case 'Human':
      return <Human {...props} />;

    case 'Reset':
      return <Reset {...props} />;

    case 'Think':
      return <Think {...props} />;

    default:
      return null;
  }
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
