import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items, renderItem }) => {
  console.log('Items in List:', items);

  if (!Array.isArray(items) || items.length === 0) {
    return <p>No items to display.</p>;
  }

  return (
    <ul>
      {items.map((item) => {
        console.log('Rendering item:', renderItem(item));
        return renderItem(item); // Directly render the result of renderItem
      })}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default List;