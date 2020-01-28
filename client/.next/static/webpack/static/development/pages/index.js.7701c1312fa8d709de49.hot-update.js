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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      inputError = _useState4[0],
      setInputError = _useState4[1];

  function onInputChange(event) {
    if (event.target.value.length < 1) {
      setInputHelperText('This field cannot be empty.');
      setInputError(true);
    } else {
      setInputHelperText('');
      setInputError(false);
    }

    setInputValue(event.target.value);
  }

  function onRadioChange(change) {
    setRadioValue(change);
  }

  return __jsx("div", {
    className: "jsx-4268669076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4268669076",
    __self: this
  }, ".radio-buttons.jsx-4268669076{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.radio-button-container.jsx-4268669076{margin:10px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbGVudGluL0RvY3VtZW50cy9SZXBvcy95b3V0dWJlVG9NcDMvY2xpZW50L2NvbXBvbmVudHMvRW50ZXJMaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDSyxBQUdvQixBQUlJLGlCQUNsQix5REFKd0IsbUdBQ3hCIiwiZmlsZSI6Ii9ob21lL3ZhbGVudGluL0RvY3VtZW50cy9SZXBvcy95b3V0dWJlVG9NcDMvY2xpZW50L2NvbXBvbmVudHMvRW50ZXJMaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tICcuL1JhZGlvQnV0dG9uJztcbmltcG9ydCB7IGxpbmtUeXBlcyB9IGZyb20gJy4uL2VudW1zL2xpbmtUeXBlcy5lbnVtJztcblxuY29uc3QgdGV4dCA9IHtcblx0dmlkZW86ICdFbnRlciB2aWRlbyB1cmwnLFxuXHRwbGF5bGlzdDogJ0VudGVyIHBsYXlsaXN0IGNvZGUnXG59O1xuXG5mdW5jdGlvbiBFbnRlckxpbmsoKSB7XG5cdGNvbnN0IFtyYWRpb1ZhbHVlLCBzZXRSYWRpb1ZhbHVlXSA9IHVzZVN0YXRlKGxpbmtUeXBlcy5WSURFTyk7XG5cdGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2lucHV0SGVscGVyVGV4dCwgc2V0SW5wdXRIZWxwZXJUZXh0XSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2lucHV0RXJyb3IsIHNldElucHV0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cblx0ZnVuY3Rpb24gb25JbnB1dENoYW5nZShldmVudCkge1xuXHRcdGlmIChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoIDwgMSkge1xuXHRcdFx0c2V0SW5wdXRIZWxwZXJUZXh0KCdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eS4nKTtcblx0XHRcdHNldElucHV0RXJyb3IodHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldElucHV0SGVscGVyVGV4dCgnJyk7XG5cdFx0XHRzZXRJbnB1dEVycm9yKGZhbHNlKTtcblx0XHR9XG5cdFx0c2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25SYWRpb0NoYW5nZShjaGFuZ2UpIHtcblx0XHRzZXRSYWRpb1ZhbHVlKGNoYW5nZSk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YFxuXHRcdFx0XHRcdC5yYWRpby1idXR0b25ze1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucmFkaW8tYnV0dG9uLWNvbnRhaW5lcntcblx0XHRcdFx0XHRcdG1hcmdpbjogMTBweCAxMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgXG5cdFx0XHRcdH1cblx0XHRcdDwvc3R5bGU+XG5cblxuXHRcdFx0PHA+e3JhZGlvVmFsdWUgPT09IGxpbmtUeXBlcy5WSURFTyA/IHRleHQudmlkZW8gOiB0ZXh0LnBsYXlsaXN0fTwvcD5cblx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0ZXJyb3I9e2lucHV0RXJyb3J9XG5cdFx0XHRcdHJlcXVpcmVkbGFiZWw9XCJcIlxuXHRcdFx0XHRoZWxwZXJUZXh0PXtpbnB1dEhlbHBlclRleHR9XG5cdFx0XHRcdHZhbHVlPXtpbnB1dFZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cblx0XHRcdC8+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmFkaW8tYnV0dG9uc1wiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0W2xpbmtUeXBlcy5WSURFTywgbGlua1R5cGVzLlBMQVlMSVNUXS5tYXAoKGl0ZW0sIGkpID0+IChcblx0XHRcdFx0XHRcdDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJyYWRpby1idXR0b24tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxSYWRpb0J1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e0Jvb2xlYW4ocmFkaW9WYWx1ZSA9PT0gaXRlbSl9XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT17J3ZpZGVvLXR5cGUnfVxuXHRcdFx0XHRcdFx0XHRcdGlkPXtpdGVtfVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtpdGVtfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtfVxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZT17b25SYWRpb0NoYW5nZX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0ZGlzYWJsZWQ9e2lucHV0VmFsdWUubGVuZ3RoIDwgMSA/IHRydWUgOiBmYWxzZX1cblx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuXHRcdFx0XHRjb2xvcj1cInByaW1hcnlcIlxuXHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIj5cblx0XHRcdFx0U3VibWl0XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRlckxpbms7Il19 */\n/*@ sourceURL=/home/valentin/Documents/Repos/youtubeToMp3/client/components/EnterLink.js */"), __jsx("p", {
    className: "jsx-4268669076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, radioValue === _enums_linkTypes_enum__WEBPACK_IMPORTED_MODULE_6__["linkTypes"].VIDEO ? text.video : text.playlist), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    error: inputError,
    requiredlabel: "",
    helperText: inputHelperText,
    value: inputValue,
    onChange: onInputChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4268669076" + " " + "radio-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, [_enums_linkTypes_enum__WEBPACK_IMPORTED_MODULE_6__["linkTypes"].VIDEO, _enums_linkTypes_enum__WEBPACK_IMPORTED_MODULE_6__["linkTypes"].PLAYLIST].map(function (item, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-4268669076" + " " + "radio-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(_RadioButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      checked: Boolean(radioValue === item),
      name: 'video-type',
      id: item,
      label: item,
      value: item,
      change: onRadioChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: inputValue.length < 1 ? true : false,
    style: {
      width: '100%'
    },
    color: "primary",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Submit"));
}

/* harmony default export */ __webpack_exports__["default"] = (EnterLink);

/***/ })

})
//# sourceMappingURL=index.js.7701c1312fa8d709de49.hot-update.js.map