import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as examplesActions from '../redux/examples/actions';
import * as examplesSelectors from '../redux/examples/selectors';

import Loading from '../components/Loading';

class ExamplePage extends React.Component {
  static propTypes = {
    example: PropTypes.object.isRequired,
    exampleStatus: PropTypes.object.isRequired,
    getExample: PropTypes.func.isRequired,
  };

  static defaultProps = {
    example: undefined,
  };

  componentDidMount() {
    const { example, getExample } = this.props;

    if (!example) {
      getExample();
    }
  }

  render() {
    const {
      example,
      exampleStatus,
    } = this.props;

    if (!example || exampleStatus.loading) {
      return <Loading />;
    }

    return (
      <div>
        <h1>{example.name}</h1>
        <div>ID {example.id}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  example: examplesSelectors.selectExampleById(state, ownProps.match.params.id),
  exampleStatus: examplesSelectors.selectExamplesStatus(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getExample: () => dispatch(examplesActions.getExample(ownProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage);
