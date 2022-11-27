import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Book from './Book';
import { fetchBooks } from '../../actions';
import _ from 'lodash';
import LoadingIcon from '../shared/LoadingIcon';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  componentWillReceiveProps(nextProps) {
    const books = nextProps.books;
    this.setState({ books });
  }

  displayBooks() {
    const books = this.state.books;
    const isFetching = this.props.isFetching;

    if (isFetching) {
      return <LoadingIcon />;
    }
    return books.map((book) =>
      <Book {...book} />
    );
  }

  render() {
    return (
      <div className="display-area">
        {this.displayBooks()}
      </div>
    );
  }
}

Home.propTypes = {
  fetchBooks: React.PropTypes.func.isRequired,
  books: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
};

function mapStateToProps({ books: { data, isFetching } }) {
  return {
    books: data,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBooks,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
