import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter) => {
        const className = filter === selected ? 'filter-btn active' : 'filter-btn';
        return (
          <button
            key={filter}
            className={className}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;