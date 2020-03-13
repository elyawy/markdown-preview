
// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({ 
  breaks: true,
});




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
          value: "# hello"
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

