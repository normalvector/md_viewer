import * as React from 'react'

interface MarkdownPaneProps {
    markdown: string
}

type MarkdownPaneState = {
}

export default class MarkdownPane extends React.Component<MarkdownPaneProps,MarkdownPaneState> {
    render() {
        return <div>Markdown Pane</div>
    }
}