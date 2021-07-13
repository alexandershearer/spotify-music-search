import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import Header from './Header'
import { getParamValues } from '../utils/functions';
import _ from 'lodash';


class Home extends React.Component {

    componentDidMount() {
        const { history, location } = this.props;
        console.log(history)
        console.log(location)
        try {
            
            if (_.isEmpty(location.hash)) {
                return history.push('/dashboard');
            }
            const access_token = getParamValues(location.hash);
            const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
            localStorage.setItem('params', JSON.stringify(access_token));
            localStorage.setItem('expiry_time', expiryTime);
            history.push('/dashboard');
        } catch (error) {
            history.push('/');
        }
    }

    handleLogin = () => {
        const {
            REACT_APP_CLIENT_ID,
            REACT_APP_AUTHORIZE_URL,
            REACT_APP_REDIRECT_URL
        } = process.env;

        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    render() {
        return (
            <div className="login" >
                <Header />
                <Button varient="info" type="submit" onClick={this.handleLogin}>
                    Login to Spotify
                </Button>
            </div>
        )
    }

}

export default connect()(Home)