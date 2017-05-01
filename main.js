const React = require('react');
const ReactDOM = require('react-dom');

class TweetBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      photoAdded: false
    };
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  togglePhoto(event) {
    this.setState({photoAdded: !this.state.photoAdded});
  }

  render() {

    return (
        <div className="well clearfix">
          <textarea className="form-control" onChange={this.handleChange.bind(this)}></textarea>
          <br/>
          <span>{140 - this.state.text.length}</span>
          <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>
          <button className="btn btn-default pull-right" onClick={this.togglePhoto.bind(this)}>{this.state.photoAdded ? "√ Photo Added" : "Add Photo"}</button>
        </div>
    );
  }

}

ReactDOM.render(
  <TweetBox/>,
  document.getElementById('container')
);
