import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as examplesActions from '../redux/examples/actions';
import * as examplesSelectors from '../redux/examples/selectors';

import Loading from '../components/Loading';

class ExamplesPage extends React.Component {
  static propTypes = {
    examples: PropTypes.array.isRequired,
    exampleStatus: PropTypes.object.isRequired,
    getExamples: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { exampleStatus, getExamples } = this.props;

    if (!exampleStatus.loaded) {
      getExamples();
    }
  }

  render() {
    const {
      examples,
      exampleStatus,
    } = this.props;

    if (exampleStatus.loading && !exampleStatus.loaded) {
      return <Loading />;
    }

    const examplesComponent = examples.map(e => <li><Link to={`/examples/${e.id}`}>{e.name}</Link></li>);

    return (
      <div style={{ padding: 30 }}>
        <h1>Examples</h1>
        <ul>
          {examplesComponent}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  examples: examplesSelectors.selectAllExamples(state),
  exampleStatus: examplesSelectors.selectExamplesStatus(state),
});

const mapDispatchToProps = dispatch => ({
  getExamples: () => dispatch(examplesActions.getExamples()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamplesPage);
