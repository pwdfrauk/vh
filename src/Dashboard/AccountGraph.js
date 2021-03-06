import DashboardGraphRight from './DashboardGraphRight/DashboardGraphRight'
import DashboardLeftside from './DashLeftside/DashboardLeftside'
import DashboardRightside from './DashRighrtside/DashboardRightside'
import DesktopMobileMenuGraph from './DashborardMobileMenu/DesktopMobileMenuGraph'
import DesktopMenuAccountGraph from './DashMicroComponents/DesktopMenuAccountGraph'
import React  from 'react'

class AccountGraph  extends React.Component {
    render() {
    return(
        <>
        <DesktopMobileMenuGraph />
        <div className="container-fluid">
            <div className="row">
                <DashboardLeftside  >
                    <DesktopMenuAccountGraph />
                </DashboardLeftside>
                <DashboardRightside >
                    <DashboardGraphRight />
                </DashboardRightside>
            </div>
        </div>
        </>
    )
}
}
export default AccountGraph;