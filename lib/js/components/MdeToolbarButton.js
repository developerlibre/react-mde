"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.MdeToolbarButton = function (props) {
    var buttonComponentClass = props.buttonComponentClass, buttonContent = props.buttonContent, buttonProps = props.buttonProps, onClick = props.onClick, readOnly = props.readOnly;
    var finalButtonComponent = buttonComponentClass || "button";
    return (React.createElement("li", { className: "mde-header-item" }, React.createElement(finalButtonComponent, __assign({}, buttonProps, {
        onClick: onClick,
        disabled: readOnly,
        tabIndex: -1,
        type: "button",
    }), buttonContent)));
};
