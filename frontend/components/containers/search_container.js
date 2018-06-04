import { connect } from 'react-redux';

import Search from '../small_components/search';

const mapStateToProps = state => ({
  users: state.entities.users,
  songs: state.entities.songs
});

export default connect(
  mapStateToProps
)(Search);
