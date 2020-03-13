
// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({ 
  breaks: true,
});


const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // this.setState({value: event.target.value});
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div class="card text-white bg-secondary mb-3 col-sm-4">
                <div class="card-header">Editor</div>
                <div class="card-body" id="editor-box">
                    <textarea value={this.props.inititalText} onChange={this.handleChange} id="editor" class="text-white bg-dark" placeholder="Enter Markdown Here!"></textarea>
                </div>
            </div>
        );
    }
}

class Preview extends React.Component {
    render() {
        const markdownText = { __html: marked(this.props.sometext)};
        return (
            <div class="card text-black bg-light  mb-3  col-sm-8" >
                <div class="card-header">Preview</div>
                <div id="preview-box" class="card-body ">
                <div id="preview" dangerouslySetInnerHTML={markdownText} />
                </div>
            </div>
        );}
  }


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: defaultText
        };

        this.onChangeEditor = this.onChangeEditor.bind(this);
    }
    onChangeEditor(newValue) {
        this.setState({
            value: newValue
        });
    }

    render() {
        return (
            <div class= "card-group">
                <Editor inititalText={this.state.value} onChange={this.onChangeEditor} />
                <Preview sometext={this.state.value} />
            </div>
    );}
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

