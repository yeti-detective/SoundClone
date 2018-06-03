import { connect } from 'react-redux';
import LandingPage from '../pages/landing_page';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

export default connect(
  mapStateToProps,
  null
)(LandingPage);
