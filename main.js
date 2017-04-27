const React = require('react');
const ReactDOM = require('react-dom');

class TweetBox extends React.Component {

  render() {

    return (
        <div className="well clearfix">
          <textarea className="form-control"></textarea>
          <br/>
          <button className="btn btn-primary pull-right">Tweet</button>
        </div>
    );
  }

}

ReactDOM.render(
  <TweetBox/>,
  document.getElementById('container')
);
