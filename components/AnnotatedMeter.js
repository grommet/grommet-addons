'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Meter = require('grommet/components/Meter');

var _Meter2 = _interopRequireDefault(_Meter);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Value = require('grommet/components/Value');

var _Value2 = _interopRequireDefault(_Value);

var _Label = require('grommet/components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _FormattedMessage = require('grommet/components/FormattedMessage');

var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var AnnotatedMeter = function (_Component) {
  (0, _inherits3.default)(AnnotatedMeter, _Component);

  function AnnotatedMeter() {
    (0, _classCallCheck3.default)(this, AnnotatedMeter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AnnotatedMeter.__proto__ || (0, _getPrototypeOf2.default)(AnnotatedMeter)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(AnnotatedMeter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var max = _props.max;
      var series = _props.series;
      var size = _props.size;
      var type = _props.type;
      var units = _props.units;
      var index = this.state.index;


      var value = void 0,
          label = void 0;
      if (index >= 0) {
        value = series[index].value;
        label = series[index].label;
      } else {
        value = 0;
        series.forEach(function (item) {
          return value += item.value;
        });
        label = _react2.default.createElement(_FormattedMessage2.default, { id: 'Total', defaultMessage: 'Total' });
      }

      var top = void 0,
          middle = void 0,
          bottom = void 0;
      if ('bar' === type) {

        top = _react2.default.createElement(
          _Box2.default,
          { direction: 'row', justify: 'between', align: 'center',
            pad: { between: 'small' }, responsive: false },
          _react2.default.createElement(_Value2.default, { value: value, units: units, align: 'start', size: size }),
          _react2.default.createElement(
            'span',
            null,
            label
          )
        );

        middle = _react2.default.createElement(_Meter2.default, { series: series, stacked: true, label: false, max: max,
          tsize: size, activeIndex: index,
          onActive: function onActive(index) {
            return _this2.setState({ index: index });
          } });

        bottom = _react2.default.createElement(
          _Box2.default,
          { direction: 'row', justify: 'between', align: 'center',
            responsive: false },
          _react2.default.createElement(
            _Label2.default,
            { size: 'small' },
            '0 ',
            units
          ),
          _react2.default.createElement(
            _Label2.default,
            { size: 'small' },
            max,
            ' ',
            units
          )
        );
      } else if ('circle' === type) {

        middle = _react2.default.createElement(_Meter2.default, { type: 'circle', stacked: true, series: series,
          label: _react2.default.createElement(_Value2.default, { value: value, units: units, align: 'center', label: label,
            size: size }), max: max, size: size, activeIndex: index,
          onActive: function onActive(index) {
            return _this2.setState({ index: index });
          } });

        bottom = _react2.default.createElement(
          _Box2.default,
          { direction: 'row', justify: 'between', align: 'center',
            responsive: false },
          _react2.default.createElement(
            _Label2.default,
            { size: 'small' },
            '0 ',
            units
          ),
          _react2.default.createElement(
            _Label2.default,
            { size: 'small' },
            max,
            ' ',
            units
          )
        );
      }

      return _react2.default.createElement(
        _Box2.default,
        null,
        top,
        middle,
        bottom
      );
    }
  }]);
  return AnnotatedMeter;
}(_react.Component);

AnnotatedMeter.displayName = 'AnnotatedMeter';
exports.default = AnnotatedMeter;
;

AnnotatedMeter.propTypes = {
  max: _react.PropTypes.number,
  series: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    colorIndex: _react.PropTypes.string,
    onClick: _react.PropTypes.func,
    label: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.number.isRequired
  })).isRequired,
  size: _Meter2.default.propTypes.size,
  type: _react.PropTypes.oneOf(['bar', 'circle']),
  units: _react.PropTypes.string
};

AnnotatedMeter.defaultProps = {
  max: 100
};
module.exports = exports['default'];