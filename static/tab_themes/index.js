'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n transition-duration: 0.3s; \n background-color: #fff;\n margin: 0 auto;\n width: 50%;\n min-width: 420px;\n'], ['\n  background-color: #eee;\n  border-bottom: 1px solid #dbdbdb;\n'], ['\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n letter-spacing: 1px; \n font-size: 1.1em; \n font-family: "Sofia"; \n  color: #000;\n  border: 0;\n  padding: 1em 1em;\n  margin-bottom: 10px;\n   &::after {\n    z-index: 0;\n    content: \'\';\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    right: 0px;\n    height: 2px;\n    background: #dbdbdb;\n  }\n  ', '\n  &:hover::after {\n    background: #fd513b;\n  }\n'], ['\n  position: relative;\n  color: #4a4a4a;\n  border: 0;\n  padding: 13px 19px;\n  margin-bottom: -1px;\n  &::after {\n    z-index: 10;\n    content: \'\';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    height: 2px;\n    background: #dbdbdb;\n  }\n  ', '\n  &:hover::after {\n    background: #3273dc;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: transparent; \n  border-radius: 0px;\n  &:hover {\n    background-color: #eee;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: block ; \n width: 60% \n margin: 0 auto \n'], ['\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = require('react-tabtab/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabListStyle = _.styled.TabListStyle,
    ActionButtonStyle = _.styled.ActionButtonStyle,
    TabStyle = _.styled.TabStyle,
    PanelStyle = _.styled.PanelStyle;


TabListStyle = (0, _styledComponents2.default)(TabListStyle)(_templateObject);

TabStyle = (0, _styledComponents2.default)(TabStyle)(_templateObject2, function (props) {
  return props.active && !props.vertical ? '\n color: #fd513b; \n font-size: 1em; \n     &::after {\n        background: #fff;\n   }\n    ' : null;
});

ActionButtonStyle = (0, _styledComponents2.default)(ActionButtonStyle)(_templateObject3);

PanelStyle = (0, _styledComponents2.default)(PanelStyle)(_templateObject4);

exports.default = {
  TabList: TabListStyle,
  ActionButton: ActionButtonStyle,
  Tab: TabStyle,
  Panel: PanelStyle
};
module.exports = exports['default'];