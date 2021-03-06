import AddAccountCard from './DashMicroComponents/AddAccountCard'
import DesktopMenuAddAccount from './DashMicroComponents/DesktopMenuAddAccount'
import DashboardLeftside from './DashLeftside/DashboardLeftside'
import DashboardRightside from './DashRighrtside/DashboardRightside'
import DashboardMobileMenu from './DashborardMobileMenu/DashboardMobileMenu'
import React  from 'react'

class AccountSetting  extends React.Component {
    render() {
    return(
        <>
        <DashboardMobileMenu />
        <div className="container-fluid">
            <div className="row">
                <DashboardLeftside>
                    <DesktopMenuAddAccount />
                </DashboardLeftside >
                <DashboardRightside >
                    <AddAccountCard />
                </DashboardRightside >
            </div>
        </div>
        </>
    )
}
}
export default AccountSetting;