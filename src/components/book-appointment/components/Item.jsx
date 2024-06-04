import React from 'react';
import '../styles/item.scss';
import PropTypes from 'prop-types';

function Item({ number, title, body }) {
  return (
    <div className="item">
      <div className="item-header">
        <div className="item-id text-black">{number}</div>
        <h3 className="item-title !text-black">{title}</h3>
      </div>

      <div className="item-body">{body}</div>
    </div>
  );
}

export default Item;

Item.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
};
