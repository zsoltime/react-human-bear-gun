import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icons';
import { stringOrNull } from '../helpers';

const Results = ({
  computerChoice,
  userChoice,
  points,
  result,
  winner,
}) => (
  <div className="results" aria-atomic="true" aria-live="polite">
    <p
      className={
        winner
          ? winner === 'user'
            ? 'result result--winner'
            : 'result result--loser'
          : 'result'
      }
    >
      <Icon
        aria-hidden="true"
        className={
          userChoice
            ? 'icon icon--small'
            : 'icon icon--small icon--thinking--mirrored'
        }
        focusable="false"
        type={userChoice || 'Think'}
      />
      <span className="visuallyhidden">
        {userChoice
          ? `You chose ${userChoice}`
          : "You're still thinking"}
      </span>
    </p>
    <p
      className={
        winner
          ? winner === 'computer'
            ? 'result result--winner'
            : 'result result--loser'
          : 'result'
      }
    >
      <Icon
        aria-hidden="true"
        className={
          computerChoice
            ? 'icon icon--small'
            : 'icon icon--small icon--thinking'
        }
        focusable="false"
        type={computerChoice || 'Think'}
      />
      <span className="visuallyhidden">
        {computerChoice
          ? `Computer chose ${computerChoice}`
          : 'Computer is still thinking'}
      </span>
    </p>
    <p aria-hidden="true" className="result result--small">
      You: ({points.user})
    </p>
    <p aria-hidden="true" className="result">
      vs
    </p>
    <p aria-hidden="true" className="result result--small">
      Computer: ({points.computer})
    </p>
    {result && <p className="result">{result}</p>}
  </div>
);

Results.propTypes = {
  computerChoice: stringOrNull,
  userChoice: stringOrNull,
  points: PropTypes.shape({
    computer: PropTypes.number.isRequired,
    user: PropTypes.number.isRequired,
  }),
  result: stringOrNull,
  winner: stringOrNull,
};

export default Results;
