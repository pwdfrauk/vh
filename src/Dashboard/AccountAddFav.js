import DesktopMenuAddAccount from './DashMicroComponents/DesktopMenuAddAccount'
import DashboardLeftside from './DashLeftside/DashboardLeftside'
import DashboardRightside from './DashRighrtside/DashboardRightside'
import DashboardMobileMenu from './DashborardMobileMenu/DashboardMobileMenu';
import AccountAddFavRight from './AccountAddFavRight/AccountAddFavRight'

const AccountAddFav =()=> {
    return(
        <>
        <DashboardMobileMenu />
        <div className="container-fluid">
            <div className="row">
                <DashboardLeftside >
                    <DesktopMenuAddAccount />
                </DashboardLeftside>
                <DashboardRightside >
                    <AccountAddFavRight />
                </DashboardRightside >
            </div>
        </div>
        </>
    )
}
export default AccountAddFav;