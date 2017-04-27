const React = require('react');
const ReactDOM = require('react-dom');

class TweetBox extends React.Component {

  handleChange(event) {
    console.log('yup');
  }

  render() {

    return (
        <div className="well clearfix">
          <textarea className="form-control" onChange={this.handleChange.bind(this)}></textarea>
          <br/>
          <button className="btn btn-primary pull-right" disabled>Tweet</button>
        </div>
    );
  }

}

ReactDOM.render(
  <TweetBox/>,
  document.getElementById('container')
);
