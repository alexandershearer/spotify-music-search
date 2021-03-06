import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import RedirectPage from '../components/RedirectPage'
import Dashboard from '../components/Dashboard'
import PageNotFound from '../components/PageNotFound'

class AppRouter extends React.Component {
    state = {
        expiryTime: '0'
    };

    componentDidMount() {
        let expiryTime;
        try {
            expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
        } catch (error) {
            expiryTime = '0';
        }
        this.setState({ expiryTime });
    }

    setExpiryTime = (expiryTime) => {
        this.setState({ expiryTime });
    };

    isValidSession = () => {
        const currentTime = new Date().getTime();
        const expiryTime = this.state.expiryTime;
        const isSessionValid = currentTime < expiryTime;

        return isSessionValid;
    };

    render() {
        return (
            <Router basename="/spotify-music-search">
                <div className="main">
                    <Switch>
                        <Route
                            path="/"
                            exact={true}
                            render={(props) => (
                                <Home isValidSession={this.isValidSession} {...props} />
                            )}
                        />
                        <Route
                            path="/redirect"
                            render={(props) => (
                                <RedirectPage
                                    isValidSession={this.isValidSession}
                                    setExpiryTime={this.setExpiryTime}
                                    {...props}
                                />
                            )}
                        />
                        <Route
                            path="/dashboard"
                            render={(props) => (
                                <Dashboard isValidSession={this.isValidSession} {...props} />
                            )}
                        />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default AppRouter;