"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MdeToolbarButtonGroup_1 = require("./MdeToolbarButtonGroup");
var MdeToolbarDropdown_1 = require("./MdeToolbarDropdown");
var MdeToolbarButton_1 = require("./MdeToolbarButton");
exports.MdeToolbar = function (props) {
    var buttonContentOptions = props.buttonContentOptions, children = props.children, commands = props.commands, onCommand = props.onCommand, readOnly = props.readOnly;
    if ((!commands || commands.length === 0) && !children) {
        return null;
    }
    return (React.createElement("div", { className: "mde-header" },
        commands.map(function (cg, i) { return (React.createElement(MdeToolbarButtonGroup_1.MdeToolbarButtonGroup, { key: i }, cg.map(function (c, j) {
            if (c.children) {
                return (React.createElement(MdeToolbarDropdown_1.MdeToolbarDropdown, { key: j, buttonProps: c.buttonProps, buttonContentOptions: buttonContentOptions, buttonContent: c.buttonContentBuilder(buttonContentOptions), commands: c.children, onCommand: function (cmd) { return onCommand(cmd); }, readOnly: readOnly }));
            }
            return React.createElement(MdeToolbarButton_1.MdeToolbarButton, { key: j, buttonContent: c.buttonContentBuilder(buttonContentOptions), buttonProps: c.buttonProps, onClick: function () { return onCommand(c); }, readOnly: readOnly, buttonComponentClass: c.buttonComponentClass });
        }))); }),
        React.createElement("div", { className: "mde-toolbar-children" }, children)));
};
