// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Button from 'grommet/components/Button';

/**
* This component is used to augment Grommet button
* with routing/history capabilities.
*/
export default class RoutedButton extends Component {

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
    const { path, ...props } = this.props;
    const { router } = this.context;
    delete props.method;
    delete props.onClick;
    let href = router.createPath(path);
    return (
      <Button {...props} href={href} onClick={this._onClick} />
    );
  }
};

RoutedButton.propTypes = {
  method: PropTypes.oneOf(['push', 'replace']),
  path: PropTypes.string.isRequired
};

RoutedButton.defaultProps = {
  method: 'push'
};

RoutedButton.contextTypes = {
  router: PropTypes.object.isRequired
};
