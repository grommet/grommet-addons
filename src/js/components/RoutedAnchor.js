// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';

/**
* This component is used to augment Grommet anchor
* with routing/history capabilities.
*/
export default class RoutedAnchor extends Component {

  constructor () {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick (event) {
    const { method, onClick, path} = this.props;
    const { router } = this.context;

    event.preventDefault();

    if ('push' === method) {
      router.push(path);
    } else if ('replace' === method) {
      router.replace(path);
    }

    if (onClick) {
      onClick();
    }
  }

  render () {
    const { className, path, ...props } = this.props;
    const { router } = this.context;
    let classes = classnames(
      { [`active`]: router.isActive(path) },
      className
    );
    let href = router.createPath(path);
    return (
      <Anchor {...props} className={classes} href={href}
        onClick={this._onClick} />
    );
  }
};

RoutedAnchor.propTypes = {
  method: PropTypes.oneOf(['push', 'replace']),
  path: PropTypes.string.isRequired
};

RoutedAnchor.defaultProps = {
  method: 'push'
};

RoutedAnchor.contextTypes = {
  router: PropTypes.object.isRequired
};
