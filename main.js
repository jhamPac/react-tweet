const React = require('react');
const ReactDOM = require('react-dom');

class TweetBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {

    return (
        <div className="well clearfix">
          <textarea className="form-control" onChange={this.handleChange.bind(this)}></textarea>
          <br/>
          <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>
        </div>
    );
  }

}

ReactDOM.render(
  <TweetBox/>,
  document.getElementById('container')
);
