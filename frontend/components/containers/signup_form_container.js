import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import LoginModal from '../small_components/login_modal';

const mapStateToProps = ({ errors }, ownProps) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
