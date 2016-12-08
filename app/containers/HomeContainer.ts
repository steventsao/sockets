import Home from '../components/Home';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { searchList: state.userName };
}

export default connect(mapStateToProps)(Home);
