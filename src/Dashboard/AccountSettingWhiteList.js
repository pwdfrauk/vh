import DesktopMenuAccountGraph from './DashMicroComponents/DesktopMenuAccountGraph'
import DashboardLeftside from './DashLeftside/DashboardLeftside'
import DashboardRightside from './DashRighrtside/DashboardRightside'
import DesktopMobileMenuGraph from './DashborardMobileMenu/DesktopMobileMenuGraph'
import AccountSettingWhiteRight from './AccountSettingWhiteRight/AccountSettingWhiteRight'


const AccountSettingWhiteList = ()=> {
    return(
        <>
         <DesktopMobileMenuGraph />
        <div className="container-fluid">
            <div className="row">
                <DashboardLeftside  >
                <DesktopMenuAccountGraph />
                </DashboardLeftside>
                <DashboardRightside >
                    <AccountSettingWhiteRight/>
                </DashboardRightside>
            </div>
        </div>
        </>
    )
}

export default AccountSettingWhiteList;