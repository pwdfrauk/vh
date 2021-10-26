import React from 'react'
import Logo from './logo.png'
import './DashboardLeftside.css'
import { Link } from 'react-router-dom';

class DashboardLeftside extends React.Component {
    render() {
        return(
            <div className="col-md-3 dashboard-left-area">
            <div className="dashboard-left-container position-fixed top-0 start-0">
            <Link to="/">
                <div className="row dash-logo-area">
                    <div className="col-3">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className="dash-logo-title col-9">
                        <h2 className="dashboard-logo-title">vuhu</h2>
                    </div>
                </div>
                </Link>
                {this.props.children}
			   </div>
            </div>
        )
    }
}
export default DashboardLeftside;