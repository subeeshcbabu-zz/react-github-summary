import React from 'react';
import Axios from 'axios';
import './Summary.css';

const GITHUB_API = 'https://api.github.com/users/';

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //Ajax call using Axios

        Axios.get(`${GITHUB_API}${this.props.username}`)
            .then(response => {
                if (response.status === 200) {
                    this.setState(response.data);
                }
            })
            .catch(response => {
                this.setState({
                    error: response
                });
            });
    }

    render() {
        return (
            <div className='ghsummary'>
                <img className='avatar' src={this.state.avatar_url} alt={this.state.name} width={this.props.width}/>
                <div className='fullname'>{this.state.name}</div>
            </div>
        )
    }
}
export default Summary
