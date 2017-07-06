// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Meter from 'grommet/components/Meter';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
// import Label from 'grommet/components/Label';
import Legend from 'grommet/components/Legend';
import FormattedMessage from 'grommet/components/FormattedMessage';

export default class AnnotatedMeter extends Component {

  constructor () {
    super();
    this._onActive = this._onActive.bind(this);
    this.state = {};
  }

  _onActive (index) {
    const { onActive } = this.props;
    this.setState({ index: index });
    if (onActive) {
      onActive(index);
    }
  }

  render () {
    const { legend, max, series, size, type, units } = this.props;
    const { index } = this.state;

    let value, label;
    if (index >= 0) {
      value = series[index].value;
      label = series[index].label;
    } else {
      value = 0;
      series.forEach(item => value += item.value);
      label = <FormattedMessage id='Total' defaultMessage='Total' />;
    }

    let top, middle, bottom, alignLegend;
    if ('bar' === type) {

      top = (
        <Box direction='row' justify='between' align='center'
          pad={{ between: 'small' }} responsive={false}>
          <Value value={value} units={units} align='start' size={size} />
          <span>{label}</span>
        </Box>
      );

      middle = (
        <Meter series={series} stacked={true} label={false} max={max}
          size={size} activeIndex={index}
          onActive={this._onActive} />
      );

      alignLegend = 'start';

    } else if ('circle' === type) {

      middle = (
        <Meter type='circle' stacked={true} series={series}
          label={
            <Value value={value} units={units} align='center' label={label}
              size={size} />
          } max={max} size={size} activeIndex={index}
          onActive={this._onActive} />
      );

      alignLegend = 'center';
    }

    // if (max) {
    //   bottom = (
    //     <Box direction='row' justify='between' align='center'
    //       responsive={false}>
    //       <Label size='small'>0 {units}</Label>
    //       <Label size='small'>{max} {units}</Label>
    //     </Box>
    //   );
    // }

    let legendElement;
    if (legend) {
      legendElement = (
        <Box alignSelf={alignLegend}>
          <Legend series={series} units={units} total={true}
            activeIndex={index} onActive={this._onActive} />
        </Box>
      );
    }

    return (
      <Box align='start'>
        <Box>
          {top}
          {middle}
          {bottom}
          {legendElement}
        </Box>
      </Box>
    );
  }

};

AnnotatedMeter.propTypes = {
  onActive: PropTypes.number,
  legend: PropTypes.bool,
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
