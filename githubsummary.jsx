const GITHUB_API = 'https://api.github.com/users/';
var GitHubData = React.createClass({
  state: {},
  componentDidMount: () => {
    //Ajax call using JQuery
    $.get(`GITHUB_API{this.props.username}`, data => this.setState(data));
  },
  render: () =>
    (
      <div>
        <img id='avatar' src={this.state.avatar_url} alt={this.state.name} width='100'/>
        <div id='name'>{this.state.name}</div>
      </div>
    )
  }
});
