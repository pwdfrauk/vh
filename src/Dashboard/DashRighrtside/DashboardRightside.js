
import React from "react";
import "./DashboardRightside.css" 

class DashboardRightside extends React.Component {
	render() {
	return(
			<div className="col-12 col-md-7 col-xl-9">
				<div className="dash-rightside">
					{this.props.rightsidecontent}
				</div>
			</div>    
	)
}
}
export default DashboardRightside;