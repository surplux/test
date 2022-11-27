import React from 'react';

const Rating = (props) => <div className="star-ratings-css">
  <div
    className="star-ratings-css-top"
    style={{ width: `${(props.rating / 5) * 100}%` }}
  >
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
  </div>
  <div className="star-ratings-css-bottom">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
  </div>
</div>;

Rating.propTypes = {
  rating: React.PropTypes.number.isRequired,
};

export default Rating;
