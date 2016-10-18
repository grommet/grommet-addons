// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Split from 'grommet/components/Split';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';

export default class SideSplit extends Component {

  constructor () {
    super();
    this.state = { responsive: 'multiple' };
  }

  render () {
    const { active, children, ...props } = this.props;
    const { responsive } = this.state;
    const priority = (active && 'single' === responsive ? 'left' : 'right');
    return (
      <Split {...props} priority={priority} flex="right"
        onResponsive={(mode => this.setState({ responsive: mode }))}>
        {children}
      </Split>
    );
  }
};

SideSplit.propTypes = {
  active: PropTypes.bool,
  logo: PropTypes.node
};

SideSplit.SideCloser = (props) => (
  <Button a11yTitle="Close Menu" {...props} icon={<CloseIcon />} />
);

SideSplit.SideOpener = (props) => {
  const { active, ...restProps } = props;
  if (active) {
    return (
      <Button a11yTitle="Open Menu" {...restProps} plain={true}>
        {props.children}
      </Button>
    );
  } else {
    return <span />;
  }
};
