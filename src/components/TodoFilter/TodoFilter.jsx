import React from 'react';
import PropTypes from 'prop-types';

export const TodoFilter = ({ changeFilter, filter }) => (
  <ul className="filters">
    <li>
      <a
        href="#/"
        className={filter === 'all'
          ? 'selected' : ''
        }
        onClick={() => changeFilter('all')}
      >
        All
      </a>
    </li>

    <li>
      <a
        href="#/active"
        className={filter === 'active'
          ? 'selected' : ''
      }
        onClick={() => changeFilter('activ')}
      >
        Active
      </a>
    </li>

    <li>
      <a
        href="#/completed"
        className={filter === 'completed'
          ? 'selected' : ''
      }
        onClick={() => changeFilter('completed')}
      >
        Completed
      </a>
    </li>
  </ul>
);

TodoFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
