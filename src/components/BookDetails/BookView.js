import React from 'react';
import Rating from '../shared/ratings';

const BookView = (props) =>
  <div className="book-detail">
    <div>
      <img src={`//${props.bookInfo.imageUrl}`} alt="book cover" />
    </div>
    <div className="book-info">
      <span className="book-name">{props.bookInfo.title}</span>
      <span className="book-author"> by {props.bookInfo.author}, <em>(Author)</em></span>
      <span className="book-date">{props.bookInfo.datePublished}</span>
      <span>
        <Rating rating={props.bookInfo.ratings} />
      </span>
      <span className="book-description">
        {props.bookInfo.description
          .split('<p>')
          .map(para => <p>{para}</p>)
        }
      </span>
    </div>
  </div>;

BookView.propTypes = {
  bookInfo: React.PropTypes.object.isRequired,
};

export default BookView;
