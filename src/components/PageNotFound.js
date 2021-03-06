import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function PageNotFound() {
    return (
        <React.Fragment>
            <Header />
            Page not found. Go to <Link to="/dashboard">Home Page</Link>
        </React.Fragment>
    )
}

export default PageNotFound