import React from 'react';
import PropTypes from 'prop-types';

export const TodoFilter = ({ changeFilter }) => (
  <ul className="filters">
    <li>
      <a
        href="#/"
        className="selected"
        onClick={() => changeFilter('all')}
      >
        All
      </a>
    </li>

    <li>
      <a
        href="#/active"
        onClick={() => changeFilter('activ')}
      >
        Active
      </a>
    </li>

    <li>
      <a
        href="#/completed"
        onClick={() => changeFilter('completed')}
      >
        Completed
      </a>
    </li>
  </ul>
);

TodoFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
