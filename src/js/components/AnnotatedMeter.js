// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Meter from 'grommet/components/Meter';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import FormattedMessage from 'grommet/components/FormattedMessage';


export default class AnnotatedMeter extends Component {

  constructor () {
    super();
    this.state = {};
  }

  render () {
    const { max, series, size, type, units } = this.props;
    const { index } = this.state;

    let value, label;
    if (index >= 0) {
      value = series[index].value;
      label = series[index].label;
    } else {
      value = 0;
      series.forEach(item => value += item.value);
      label = <FormattedMessage id="Total" defaultMessage="Total" />;
    }

    let top, middle, bottom;
    if ('bar' === type) {

      top = (
        <Box direction="row" justify="between" align="center"
          pad={{ between: 'small' }} responsive={false}>
          <Value value={value} units={units} align="start" size={size} />
          <span>{label}</span>
        </Box>
      );

      middle = (
        <Meter series={series} stacked={true} label={false} max={max}
          size={size} activeIndex={index}
          onActive={(index) => this.setState({ index: index })} />
      );

      bottom = (
        <Box direction="row" justify="between" align="center"
          responsive={false}>
          <Label size="small">0 {units}</Label>
          <Label size="small">{max} {units}</Label>
        </Box>
      );

    } else if ('circle' === type) {

      middle = (
        <Meter type="circle" stacked={true} series={series}
          label={
            <Value value={value} units={units} align="center" label={label}
              size={size} />
          } max={max} size={size} activeIndex={index}
          onActive={(index) => this.setState({ index: index })} />
      );

      bottom = (
        <Box direction="row" justify="between" align="center"
          responsive={false}>
          <Label size="small">0 {units}</Label>
          <Label size="small">{max} {units}</Label>
        </Box>
      );

    }

    return (
      <Box align="start">
        <Box>
          {top}
          {middle}
          {bottom}
        </Box>
      </Box>
    );
  }

};

AnnotatedMeter.propTypes = {
  max: PropTypes.number,
  series: PropTypes.arrayOf(PropTypes.shape({
    colorIndex: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })).isRequired,
  size: Meter.propTypes.size,
  type: PropTypes.oneOf(['bar', 'circle']).isRequired,
  units: PropTypes.string
};

AnnotatedMeter.defaultProps = {
  max: 100
};
