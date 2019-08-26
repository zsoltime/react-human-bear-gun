import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icons';
import { stringOrNull } from '../helpers';

const RadioBox = ({ choice, userChoice, onChange }) => (
  <>
    <input
      id={choice}
      checked={choice === userChoice}
      className="radio visuallyhidden"
      onChange={onChange}
      type="radio"
    />
    <label
      className={
        choice === userChoice
          ? 'radio-box radio-box--active'
          : 'radio-box'
      }
      htmlFor={choice}
    >
      <Icon
        aria-hidden="true"
        className="icon"
        focusable="false"
        type={choice}
      />
      <span className="visuallyhidden">{choice}</span>
    </label>
  </>
);

RadioBox.propTypes = {
  choice: stringOrNull,
  userChoice: stringOrNull,
  onChange: PropTypes.func.isRequired,
};

export default RadioBox;
