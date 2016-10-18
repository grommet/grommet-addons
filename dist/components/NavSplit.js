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

var _Split = require('grommet/components/Split');

var _Split2 = _interopRequireDefault(_Split);

var _Sidebar = require('grommet/components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Title = require('grommet/components/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Close = require('grommet/components/icons/base/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var NavSidebar = function (_Component) {
  (0, _inherits3.default)(NavSidebar, _Component);

  function NavSidebar() {
    (0, _classCallCheck3.default)(this, NavSidebar);
    return (0, _possibleConstructorReturn3.default)(this, (NavSidebar.__proto__ || (0, _getPrototypeOf2.default)(NavSidebar)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavSidebar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var logo = _props.logo;
      var navMenu = _props.navMenu;
      var onClose = _props.onClose;
      var title = _props.title;

      return _react2.default.createElement(
        _Sidebar2.default,
        { colorIndex: 'neutral-1', fixed: true },
        _react2.default.createElement(
          _Header2.default,
          { size: 'large', justify: 'between', pad: { horizontal: 'medium' } },
          _react2.default.createElement(
            _Title2.default,
            { onClick: onClose, a11yTitle: 'Close Menu' },
            logo,
            _react2.default.createElement(
              'span',
              null,
              title
            )
          ),
          _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_Close2.default, null), onClick: onClose,
            a11yTitle: 'Close Menu' })
        ),
        navMenu
      );
    }
  }]);
  return NavSidebar;
}(_react.Component);

NavSidebar.displayName = 'NavSidebar';


NavSidebar.propTypes = {
  logo: _react.PropTypes.node,
  name: _react.PropTypes.string,
  navMenu: _react.PropTypes.node,
  onClose: _react.PropTypes.func
};

var Main = function (_Component2) {
  (0, _inherits3.default)(Main, _Component2);

  function Main() {
    (0, _classCallCheck3.default)(this, Main);
    return (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).apply(this, arguments));
  }

  (0, _createClass3.default)(Main, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var headerMenu = _props2.headerMenu;
      var heading = _props2.heading;
      var logo = _props2.logo;
      var navActive = _props2.navActive;
      var onOpenNavSidebar = _props2.onOpenNavSidebar;
      var search = _props2.search;

      var title = void 0;
      if (navActive) {
        title = _react2.default.createElement(
          _Title2.default,
          null,
          _react2.default.createElement(
            'span',
            null,
            heading
          )
        );
      } else {
        title = _react2.default.createElement(
          _Title2.default,
          { onClick: onOpenNavSidebar, a11yTitle: 'Open Menu' },
          logo,
          _react2.default.createElement(
            'span',
            null,
            heading
          )
        );
      }
      return _react2.default.createElement(
        _Box2.default,
        null,
        _react2.default.createElement(
          _Header2.default,
          { size: 'large', pad: { horizontal: 'medium', between: 'small' } },
          title,
          _react2.default.createElement(
            _Box2.default,
            { flex: true },
            search
          ),
          headerMenu
        ),
        this.props.children
      );
    }
  }]);
  return Main;
}(_react.Component);

Main.displayName = 'Main';


Main.propTypes = {
  headerMenu: _react.PropTypes.node,
  heading: _react.PropTypes.string,
  logo: _react.PropTypes.node,
  navActive: _react.PropTypes.bool,
  onOpenNavSidebar: _react.PropTypes.func,
  search: _react.PropTypes.node
};

var NavSplit = function (_Component3) {
  (0, _inherits3.default)(NavSplit, _Component3);

  function NavSplit() {
    (0, _classCallCheck3.default)(this, NavSplit);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (NavSplit.__proto__ || (0, _getPrototypeOf2.default)(NavSplit)).call(this));

    _this3.state = { navActive: true, responsive: 'multiple' };
    return _this3;
  }

  (0, _createClass3.default)(NavSplit, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props;
      var headerMenu = _props3.headerMenu;
      var heading = _props3.heading;
      var logo = _props3.logo;
      var navMenu = _props3.navMenu;
      var search = _props3.search;
      var title = _props3.title;
      var _state = this.state;
      var navActive = _state.navActive;
      var responsive = _state.responsive;


      var navSidebar = void 0;
      if (navActive) {
        navSidebar = _react2.default.createElement(NavSidebar, { logo: logo, navMenu: navMenu, title: title,
          onClose: function onClose() {
            return _this4.setState({ navActive: false });
          } });
      }
      var priority = navActive && 'single' === responsive ? 'left' : 'right';

      return _react2.default.createElement(
        _Split2.default,
        { priority: priority, flex: 'right',
          onResponsive: function onResponsive(mode) {
            return _this4.setState({ responsive: mode });
          } },
        navSidebar,
        _react2.default.createElement(
          Main,
          { logo: logo, heading: heading, headerMenu: headerMenu,
            search: search, navActive: navActive,
            onOpenNavSidebar: function onOpenNavSidebar() {
              return _this4.setState({ navActive: true });
            } },
          this.props.children
        )
      );
    }
  }]);
  return NavSplit;
}(_react.Component);

NavSplit.displayName = 'NavSplit';
exports.default = NavSplit;
;

NavSplit.propTypes = {
  headerMenu: _react.PropTypes.node,
  heading: _react.PropTypes.string,
  logo: _react.PropTypes.node,
  navMenu: _react.PropTypes.node,
  search: _react.PropTypes.node,
  title: _react.PropTypes.string
};
module.exports = exports['default'];