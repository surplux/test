import React from 'react';
import { Link } from 'react-router';
import Rating from '../shared/ratings';

const Book = (props) => <div className="book-select">
  <div className="book-thumbnail">
    <Link to={`/books/${props._id}`}>
      <img src={`//${props.imageUrl}`} alt="book cover" />
    </Link>
  </div>
  <span className="text" >{props.author}</span>
  <Link className="text" to={`/books/${props._id}`}>
    <span>{props.title}</span>
  </Link>
  <span className="text">{props.datePublished}</span>
  <span className="text"><Rating rating={props.ratings} /></span>
</div>;

Book.propTypes = {
  _id: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string,
  author: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  ratings: React.PropTypes.number.isRequired,
  datePublished: React.PropTypes.string.isRequired,
};

export default Book;
