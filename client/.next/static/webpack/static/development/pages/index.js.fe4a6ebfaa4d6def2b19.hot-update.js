webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/EnterLink.js":
/*!*********************************!*\
  !*** ./components/EnterLink.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RadioButton */ "./components/RadioButton.js");
/* harmony import */ var _enums_linkTypes_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/linkTypes.enum */ "./enums/linkTypes.enum.js");
var _jsxFileName = "/home/valentin/Documents/Repos/youtubeToMp3/client/components/EnterLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var text = {
  video: 'Enter video url',
  playlist: 'Enter playlist code'
};

function EnterLink() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_enums_linkTypes_enum__WEBPACK_IMPORTED_MODULE_6__["linkTypes"].VIDEO),
      radioValue = _useState[0],
      setRadioValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      inputHelperText = _useState3[0],
      setInputHelperText = _useState3[1];

  function onInputChange(event) {
    setHelperText('Input is a required field!');
    setInputValue(event.target.value);
  }

  return __jsx("div", {
    className: "jsx-4268669076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4268669076",
    __self: this
  }, ".radio-buttons.jsx-4268669076{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.radio-button-container.jsx-4268669076{margin:10px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbGVudGluL0RvY3VtZW50cy9SZXBvcy95b3V0dWJlVG9NcDMvY2xpZW50L2NvbXBvbmVudHMvRW50ZXJMaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCSyxBQUdvQixBQUlJLGlCQUNsQix5REFKd0IsbUdBQ3hCIiwiZmlsZSI6Ii9ob21lL3ZhbGVudGluL0RvY3VtZW50cy9SZXBvcy95b3V0dWJlVG9NcDMvY2xpZW50L2NvbXBvbmVudHMvRW50ZXJMaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tICcuL1JhZGlvQnV0dG9uJztcbmltcG9ydCB7IGxpbmtUeXBlcyB9IGZyb20gJy4uL2VudW1zL2xpbmtUeXBlcy5lbnVtJztcblxuY29uc3QgdGV4dCA9IHtcblx0dmlkZW86ICdFbnRlciB2aWRlbyB1cmwnLFxuXHRwbGF5bGlzdDogJ0VudGVyIHBsYXlsaXN0IGNvZGUnXG59O1xuXG5mdW5jdGlvbiBFbnRlckxpbmsoKSB7XG5cdGNvbnN0IFtyYWRpb1ZhbHVlLCBzZXRSYWRpb1ZhbHVlXSA9IHVzZVN0YXRlKGxpbmtUeXBlcy5WSURFTyk7XG5cdGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2lucHV0SGVscGVyVGV4dCwgc2V0SW5wdXRIZWxwZXJUZXh0XSA9IHVzZVN0YXRlKCcnKTtcblxuXHRmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGV2ZW50KSB7XG5cdFx0c2V0SGVscGVyVGV4dCgnSW5wdXQgaXMgYSByZXF1aXJlZCBmaWVsZCEnKTtcblx0XHRzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YFxuXHRcdFx0XHRcdC5yYWRpby1idXR0b25ze1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucmFkaW8tYnV0dG9uLWNvbnRhaW5lcntcblx0XHRcdFx0XHRcdG1hcmdpbjogMTBweCAxMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgXG5cdFx0XHRcdH1cblx0XHRcdDwvc3R5bGU+XG5cblxuXHRcdFx0PHA+e3JhZGlvVmFsdWUgPT09IGxpbmtUeXBlcy5WSURFTyA/IHRleHQudmlkZW8gOiB0ZXh0LnBsYXlsaXN0fTwvcD5cblx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0ZXJyb3I9e2ZhbHNlfVxuXHRcdFx0XHRyZXF1aXJlZGxhYmVsPVwiXCJcblx0XHRcdFx0aGVscGVyVGV4dD17aW5wdXRIZWxwZXJUZXh0fVxuXHRcdFx0XHR2YWx1ZT17aW5wdXRWYWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG5cdFx0XHQvPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWJ1dHRvbnNcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdFtsaW5rVHlwZXMuVklERU8sIGxpbmtUeXBlcy5QTEFZTElTVF0ubWFwKChpdGVtLCBpKSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicmFkaW8tYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8UmFkaW9CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtCb29sZWFuKHJhZGlvVmFsdWUgPT09IGl0ZW0pfVxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9eyd2aWRlby10eXBlJ31cblx0XHRcdFx0XHRcdFx0XHRpZD17aXRlbX1cblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17aXRlbX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbX1cblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2U9e3NldFJhZGlvVmFsdWV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRjb2xvcj1cInByaW1hcnlcIlxuXHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIj5cblx0XHRcdFx0U3VibWl0XG5cdFx0XHQ8L0J1dHRvbj5cblxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRlckxpbms7Il19 */\n/*@ sourceURL=/home/valentin/Documents/Repos/youtubeToMp3/client/components/EnterLink.js */"), __jsx("p", {
    className: "jsx-4268669076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, radioValue === _enums_linkTypes_enum__WEBPACK_IMPORTED_MODULE_6__["linkTypes"].VIDEO ? text.video : text.playlist), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    error: false,
    requiredlabel: "",
    helperText: inputHelperText,
    value: inputValue,
    onChange: onInputChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4268669076" + " " + "radio-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, [_enums_linkTypes_enum__WEBPACK_IMPORTED_MODULE_6__["linkTypes"].VIDEO, _enums_linkTypes_enum__WEBPACK_IMPORTED_MODULE_6__["linkTypes"].PLAYLIST].map(function (item, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-4268669076" + " " + "radio-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(_RadioButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      checked: Boolean(radioValue === item),
      name: 'video-type',
      id: item,
      label: item,
      value: item,
      change: setRadioValue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }));
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "primary",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Submit"));
}

/* harmony default export */ __webpack_exports__["default"] = (EnterLink);

/***/ })

})
//# sourceMappingURL=index.js.fe4a6ebfaa4d6def2b19.hot-update.js.map