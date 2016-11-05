import React, { Component, PropTypes } from 'react';

export default class LazyLoad extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([
      PropTypes.instanceOf(Promise),
      PropTypes.instanceOf(Component),
      PropTypes.func
    ]).isRequired,
    fetchedComponent: PropTypes.oneOfType([
      PropTypes.instanceOf(Component),
      PropTypes.func
    ])
  }
  state = {};

  componentWillMount() {
    const { component, fetchedComponent } = this.props;
    if (fetchedComponent || !component.then) {
      this.setState({
        Component: fetchedComponent || component
      });
    } else {
      component.then(c => this.setState({ Component: c }));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return Boolean(nextState.Component);
  }

  render() {
    const { component, ...props } = this.props; //eslint-disable-line
    const { Component } = this.state;
    if (Component) {
      return <Component {...props} />;
    } else {
      return <div>Loading</div>;
    }
  }
}
