// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import SpinningIcon from 'grommet/components/icons/Spinning';
import FormattedMessage from 'grommet/components/FormattedMessage';

export default class ListPlaceholder extends Component {

  render () {
    const {
      addControl, emptyMessage, filteredTotal, unfilteredTotal
    } = this.props;

    let content1, content2;
    if (undefined === filteredTotal) {
      content1 = <SpinningIcon />;
    } else if (unfilteredTotal === 0) {
      content1 = <span className='secondary'>{emptyMessage}</span>;
      content2 = addControl;
    } else if (filteredTotal === 0) {
      content1 = (
        <span className='secondary'>
          <FormattedMessage id='No matches' defaultMessage='No matches' />
        </span>
      );
    }
    if (content1) {
      content1 = (
        <Box justify='center' align='center'
          pad={{
            horizontal: 'medium', vertical: 'large', between: 'medium'
          }}>
          {content1}
          {content2}
        </Box>
      );
    }
    return content1;
  }

};

ListPlaceholder.propTypes = {
  addControl: PropTypes.element,
  emptyMessage: PropTypes.string,
  filteredTotal: PropTypes.number,
  unfilteredTotal: PropTypes.number
};
