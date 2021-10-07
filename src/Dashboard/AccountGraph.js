import DashboardGraphRight from './DashboardGraphRight/DashboardGraphRight'
import DesktopMenuAddAccount from './DashMicroComponents/DesktopMenuAddAccount'
import DashboardLeftside from './DashLeftside/DashboardLeftside'
import DashboardRightside from './DashRighrtside/DashboardRightside'
import DashboardMobileMenu from './DashborardMobileMenu/DashboardMobileMenu'
import React  from 'react'

class AccountGraph  extends React.Component {
    render() {
    return(
        <>
        <DashboardMobileMenu />
        <div className="container-fluid">
            <div className="row">
                <DashboardLeftside  >
                    <DesktopMenuAddAccount />
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