import * as React from "react";
import {Command, LayoutProps} from "../types";
import {ReactMde} from "../ReactMde";
import {MdePreview, MdeEditor, MdeToolbar} from "../components";
import * as classNames from "classnames";

export class HorizontalLayout extends React.Component<LayoutProps, {}> {
    editorRef: MdeEditor;
    previewRef: MdePreview;

    /**
     * Handler for the textArea value change
     * @memberOf ReactMde
     */
    handleMdeStateChange = (value) => {
        const {onChange} = this.props;
        onChange(value);
    }

    handleCommand = (command: Command) => {
        const {onCommand} = this.props;
        onCommand(command);
    }

    /**
     * Renders react-mde
     * @returns
     * @memberOf ReactMde
     */
    render() {
        const {buttonContentOptions, commands, mdeEditorState, layoutOptions, emptyPreviewHtml, readOnly} = this.props;
        const finalLayoutOptions = layoutOptions ? {...layoutOptions} : {};

        return (
            <div className="react-mde-horizontal-layout">
                <MdeToolbar
                    buttonContentOptions={buttonContentOptions}
                    commands={commands}
                    onCommand={this.handleCommand}
                    readOnly={readOnly}
                />
                <div className="mde-content">
                    <MdeEditor
                        className={classNames(finalLayoutOptions.editorClassName)}
                        editorRef={(c) => this.editorRef = c}
                        onChange={this.handleMdeStateChange}
                        editorState={mdeEditorState}
                        readOnly={readOnly}
                    />
                    <MdePreview
                        className={classNames(finalLayoutOptions.editorClassName)}
                        previewRef={(c) => this.previewRef = c}
                        html={mdeEditorState ? mdeEditorState.html : ""}
                        emptyPreviewHtml={emptyPreviewHtml}
                    />
                </div>
            </div>
        );
    }
}
