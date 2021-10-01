import React from 'react'
import Logo from './logo.png'
import './DashboardLeftside.css'

class DashboardLeftside extends React.Component {
    render() {
        return(
            <div className="col-md-5 col-xl-3">
            <div className="dashboard-left-container position-fixed top-0 start-0">
                <div className="row dash-logo-area">
                    <div className="col-4">
                        <img src={Logo} alt="logo"/>
                        </div>
                    <div className="dash-logo-title col-8">
                        <h2>VUHU</h2>
                    </div>
                </div>
                {this.props.desktopmenu}
			   </div>
            </div>
        )
    }
}
export default DashboardLeftside;