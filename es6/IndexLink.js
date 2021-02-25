var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import Link from './Link';
import createReactClass from 'create-react-class';

/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
var IndexLink = createReactClass({
  displayName: 'IndexLink',
  render: function render() {
    return React.createElement(Link, _extends({}, this.props, { onlyActiveOnIndex: true }));
  }
});

export default IndexLink;