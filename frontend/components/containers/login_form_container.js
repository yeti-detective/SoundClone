import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginModal from '../small_components/login_modal';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
