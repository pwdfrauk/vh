import AddAccountCard from './DashMicroComponents/AddAccountCard'
import DesktopMenuAddAccount from './DashMicroComponents/DesktopMenuAddAccount'
import DashboardLeftside from './DashLeftside/DashboardLeftside'
import DashboardRightside from './DashRighrtside/DashboardRightside'
import React  from 'react'

class AccountSetting  extends React.Component {
    render() {
    return(
        <div class="container-fluid">
            <div class="row">
                <DashboardLeftside desktopmenu={<DesktopMenuAddAccount />} />
                <DashboardRightside rightsidecontent={<AddAccountCard />}/>
            </div>
        </div>
    )
}
}
export default AccountSetting;