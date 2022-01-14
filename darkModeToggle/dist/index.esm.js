import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import * as React from 'react';
import React__default, { useState, useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".toggle-button {\n  position: relative;\n  border: none;\n  background: none;\n}\n.toggle-button:hover {\n  cursor: pointer;\n}\n.toggle-button-bar {\n  z-index: -1;\n  width: 70px;\n}\n.toggle-button-toggle {\n  position: absolute;\n  width: 20px;\n  top: 6px;\n  transition: 0.3s ease all;\n  left: 12px;\n}\n.toggle-button-toggle-dark {\n  transform: translateX(0);\n}\n.toggle-button-toggle-light {\n  transform: translateX(38px);\n}\n.toggle-button-moon {\n  position: absolute;\n  width: 18px;\n  left: 12px;\n  top: 6px;\n  animation: fadeIn 0.5s linear;\n  transform: scaleX(-1);\n}\n.toggle-button-sun {\n  position: absolute;\n  width: 20px;\n  right: 11px;\n  top: 6px;\n  animation: fadeIn 0.5s linear;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    transform: translateY(startYposition);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(endYposition);\n  }\n}";
n(css,{});

var _g$3;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var SvgMoon = function SvgMoon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64.7 75.04"
  }, props), _g$3 || (_g$3 = /*#__PURE__*/React.createElement("g", {
    "data-name": "Layer 2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40.94 2.61A37.29 37.29 0 0 0 25 .07c12.87 10.35 19 27.13 11.1 42.6C29.12 56.26 14.8 63.56 0 63.35A37.51 37.51 0 1 0 40.94 2.61Z",
    "data-name": "Layer 1"
  }))));
};

var _g$2;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var SvgSun = function SvgSun(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 79.88 83.59"
  }, props), _g$2 || (_g$2 = /*#__PURE__*/React.createElement("g", {
    "data-name": "Layer 2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M76.29 32.54 79.88 29s-2.25-.35-5-.74l-8.25-1.21a4.8 4.8 0 0 1-4.06-5.63l1.57-8.65c.49-2.7.89-4.92.88-4.93s-2 1-4.47 2.27l-8 4.12a4.91 4.91 0 0 1-6.66-2.2L42.17 4.5C40.99 2 39.99 0 39.99 0s-1 2-2.24 4.49l-3.53 7.15a4.8 4.8 0 0 1-6.61 2.12l-7.45-4-4.47-2.36s.34 2.25.78 5l1.46 9a4.91 4.91 0 0 1-4.15 5.6l-8.79 1.29-5 .71s1.61 1.6 3.58 3.52l5.85 5.7a4.81 4.81 0 0 1 0 6.95l-5.81 5.56-3.62 3.48s2.23.37 5 .79l8.59 1.33A4.9 4.9 0 0 1 17.63 62l-1.54 9c-.47 2.71-.84 4.93-.84 4.94s2-1 4.46-2.32l7.66-4a4.8 4.8 0 0 1 6.62 2.18l3.52 7.28c1.19 2.48 2.18 4.51 2.19 4.52s1-2 2.27-4.48l3.76-7.43a4.91 4.91 0 0 1 6.68-2.14l7.79 4.1c2.4 1.28 4.4 2.35 4.42 2.35s-.37-2.24-.83-5l-1.48-8.64a4.8 4.8 0 0 1 4.11-5.6l8.49-1.15 5-.69s-1.61-1.61-3.56-3.55l-6-6a4.93 4.93 0 0 1 0-7Zm-36.3 27.68a17.44 17.44 0 1 1 17.39-17.43 17.43 17.43 0 0 1-17.39 17.43Z",
    "data-name": "Layer 1"
  }))));
};

var _g$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var SvgToggleBar = function SvgToggleBar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 266.28 114.22"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/React.createElement("g", {
    "data-name": "Layer 2"
  }, /*#__PURE__*/React.createElement("g", {
    "data-name": "Layer 1"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 57.11,
    cy: 57.11,
    r: 57.11
  }), /*#__PURE__*/React.createElement("path", {
    d: "M57.11 0h152.06v114.22H57.11z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 209.17,
    cy: 57.11,
    r: 57.11
  })))));
};

var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgToggleButton = function SvgToggleButton(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 75.95 75.95"
  }, props), _g || (_g = /*#__PURE__*/React.createElement("g", {
    "data-name": "Layer 2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 37.98,
    cy: 37.98,
    r: 37.98,
    "data-name": "Layer 1"
  }))));
};

var useDarkModeToggle = function useDarkModeToggle() {
  var _localStorage;

  var _useState = useState((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem("currentTheme")),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setActiveTheme = _useState2[1];

  var isDark = theme ? theme === "dark" ? true : false : undefined;
  var systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)"
  }, undefined, function (isSystemDark) {
    return setTheme(isSystemDark);
  });

  var setTheme = function setTheme() {
    var _localStorage2;

    var isSystemDark = !isDark;
    var newTheme = isSystemDark ? "dark" : "light";
    setActiveTheme(newTheme);
    (_localStorage2 = localStorage) === null || _localStorage2 === void 0 ? void 0 : _localStorage2.setItem("currentTheme", newTheme);
  };

  useEffect(function () {
    if (systemPrefersDark && !theme) {
      setTheme();
    }
  }, [systemPrefersDark]);
  var value = useMemo(function () {
    return isDark === undefined ? !!systemPrefersDark : isDark;
  }, [isDark, systemPrefersDark]);
  useEffect(function () {
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  var returnToggle = function returnToggle() {
    return /*#__PURE__*/React__default.createElement(ToggleButton, {
      onClick: setTheme,
      currentTheme: isDark ? "dark" : "light"
    });
  };

  return {
    toggleButton: returnToggle(),
    theme: theme
  };
};

var ToggleButton = function ToggleButton(_ref) {
  var onClick = _ref.onClick,
      currentTheme = _ref.currentTheme;
  var isDark = currentTheme === "dark";
  var linkColor = useMemo(function () {
    return getComputedStyle(document.body).getPropertyValue("--link-color-".concat(currentTheme));
  }, [currentTheme]);
  var secondaryColor = isDark ? "#4666ab" : "white";
  return /*#__PURE__*/React__default.createElement("button", {
    className: "toggle-button",
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement(SvgToggleButton, {
    fill: secondaryColor,
    className: clsx("toggle-button-toggle", {
      "toggle-button-toggle-dark": isDark
    }, {
      "toggle-button-toggle-light": !isDark
    })
  }), /*#__PURE__*/React__default.createElement(SvgToggleBar, {
    fill: linkColor,
    className: "toggle-button-bar"
  }), !isDark && /*#__PURE__*/React__default.createElement(SvgMoon, {
    fill: secondaryColor,
    className: "toggle-button-moon"
  }), isDark && /*#__PURE__*/React__default.createElement(SvgSun, {
    fill: secondaryColor,
    className: "toggle-button-sun"
  }));
};

export { useDarkModeToggle };
