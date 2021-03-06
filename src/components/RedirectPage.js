import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';
export default class RedirectPage extends React.Component {
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
    render() {
        return null;
    }
}
