'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* This component is used to augment Grommet button
* with routing/history capabilities.
*/
// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var RoutedButton = function (_Component) {
  (0, _inherits3.default)(RoutedButton, _Component);

  function RoutedButton() {
    (0, _classCallCheck3.default)(this, RoutedButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RoutedButton.__proto__ || (0, _getPrototypeOf2.default)(RoutedButton)).call(this));

    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(RoutedButton, [{
    key: '_onClick',
    value: function _onClick(event) {
      var _props = this.props;
      var method = _props.method;
      var onClick = _props.onClick;
      var path = _props.path;
      var router = this.context.router;


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
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var path = _props2.path;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['path']);
      var router = this.context.router;

      delete props.method;
      delete props.onClick;
      var href = router.createPath(path);
      return _react2.default.createElement(_Button2.default, (0, _extends3.default)({}, props, { href: href, onClick: this._onClick }));
    }
  }]);
  return RoutedButton;
}(_react.Component);

RoutedButton.displayName = 'RoutedButton';
exports.default = RoutedButton;
;

RoutedButton.propTypes = {
  method: _react.PropTypes.oneOf(['push', 'replace']),
  path: _react.PropTypes.string.isRequired
};

RoutedButton.defaultProps = {
  method: 'push'
};

RoutedButton.contextTypes = {
  router: _react.PropTypes.object.isRequired
};
module.exports = exports['default'];