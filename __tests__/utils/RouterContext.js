// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
// from https://gist.github.com/alanrubin/da3f740308eb26b20e70

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RouterContext extends Component {

  getChildContext () {
    return {
      router: {
        createPath: () => {},
        isActive: () => {}
      }
    };
  }

  render () {
    return <div>{this.props.children}</div>;
  }
};

RouterContext.childContextTypes = {
  router: PropTypes.any
};
