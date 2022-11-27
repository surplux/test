import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookView from './BookView';
import LoadingIcon from '../shared/LoadingIcon';
import { fetchBookDetails } from '../../actions';

class BookDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      bookDetails: {},
    };
  }

  componentDidMount() {
    const id = this.props.id;
    this.props.fetchBookDetails(id);
  }

  componentWillReceiveProps(nextProps) {
    const bookDetails = nextProps.bookDetails;
    this.setState({ bookDetails });
  }

  renderBookDetails() {
    const isFetching = this.props.isFetching;
    const book = this.state.bookDetails;
    if (isFetching) {
      return <LoadingIcon />;
    }
    if (Object.keys(book).length < 1) {
      return <div>
        Book Not Found
      </div>;
    }
    return (
      <div className="display-area">
        <BookView bookInfo={book} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderBookDetails()}
      </div>
    );
  }
};

BookDetails.propTypes = {
  id: React.PropTypes.string.isRequired,
  bookDetails: React.PropTypes.object.isRequired,
  fetchBookDetails: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
}

function mapStateToProps(state, ownParam) {
  return {
    id: ownParam.routeParams.bookId,
    bookDetails: state.bookDetails.data,
    isFetching: state.bookDetails.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBookDetails,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);