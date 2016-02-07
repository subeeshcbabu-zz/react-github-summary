import React from 'react';
import Axios from 'axios';
import Octicon from 'react-octicon';
import '../styles/Summary.css';

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

    addClassName () {
        return `${this.props.class ? this.props.class : ''} ghsummary`;
    }
    addStyle () {
        return this.props.width ? { width : this.props.width } : {};
    }

    render() {
        let { username, width, imgWidth } = this.props;
        let { name, html_url, avatar_url, location } = this.state;
        let followLink = `https://ghbtns.com/github-btn.html?user=${username}&type=follow&count=true`
        return (
            <div className={this.addClassName()} style={this.addStyle()}>
                <div>
                    <Octicon className='logo' mega name='logo-github'/>
                </div>

                <div className='avatar'>
                    <Octicon className='mark' mega name='mark-github'/>

                    <a href={html_url}>
                        <img src={avatar_url} alt={name} width={imgWidth}/>
                    </a>
                </div>
                <div className='fullname'>{name}</div>
                <div className='location'>
                    <Octicon name='location'/>
                    <span>{location}</span>
                </div>
                <iframe src={followLink} frameBorder="0" scrolling="0" width="170px" height="20px"></iframe>
            </div>
        )
    }
}
export default Summary
