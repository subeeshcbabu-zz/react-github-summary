const GITHUB_API = 'https://api.github.com/users/';
var GitHubData = React.createClass({
    getInitialState() {
        return {};
    },
    componentDidMount() {
        //Ajax call using JQuery
        $.get(`${GITHUB_API}${this.props.username}`, data => {
            this.setState(data);
        });
    },
    render() {
        return (
            <div>
            <img id='avatar' src={this.state.avatar_url} alt={this.state.name} width={this.props.width}/>
            <div id='name'>{this.state.name}</div>
            </div>
        )
    }
});
