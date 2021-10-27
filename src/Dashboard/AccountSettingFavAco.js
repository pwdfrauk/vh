import DesktopMenuAccountGraph from './DashMicroComponents/DesktopMenuAccountGraph'
import DashboardLeftside from './DashLeftside/DashboardLeftside'
import DashboardRightside from './DashRighrtside/DashboardRightside'
import DesktopMobileMenuGraph from './DashborardMobileMenu/DesktopMobileMenuGraph'
import AccountSettingFavAcoRight from './AccountSettingFavAcoRight/AccountSettingFavAcoRight'


const AccountSettingFavAco = ()=> {
    return(
        <>
         <DesktopMobileMenuGraph />
        <div className="container-fluid">
            <div className="row">
                <DashboardLeftside  >
                    <DesktopMenuAccountGraph />
                </DashboardLeftside>
                <DashboardRightside >
                    <AccountSettingFavAcoRight />
                </DashboardRightside>
            </div>
        </div>
        </>
    )
}

export default AccountSettingFavAco;