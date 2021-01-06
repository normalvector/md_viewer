import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button} from '@material-ui/core'

import MarkdownPane from './components/markdown_pane'

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';

const data = {
    id: 'root',
    name: 'root',
    children: [
        {
            id: 'child1',
            name: 'child1',
        },
        {
            id: 'child2',
            name: 'child2',
        },
        {
            id: 'child3',
            name: 'child3',
        },
    ],
}

const renderTree = (node) => {
    return <TreeItem key={node.id} nodeId={node.id} label={node.name}>
        {Array.isArray(node.children) ?
        node.children.map((child) => renderTree(child)) : null}
    </TreeItem>
}

const md = `
# Markdown

This is a *quick test* of [Markdown](https://www.markdownguide.org/)
`

const Index = () => {
    return (
        <div>
            <div>Hello World</div>
            <Button variant="contained" color="primary">Button</Button>
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon/>}
                defaultExpandIcon={<ChevronRightIcon/>}
            >
                {renderTree(data)}
            </TreeView>
            <MarkdownPane  markdown={md}/>
        </div>
    )
}

ReactDOM.render(<Index/>, document.getElementById('app'))