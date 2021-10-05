import DesktopMenuAddAccount from './DashMicroComponents/DesktopMenuAddAccount'
import DashboardLeftside from './DashLeftside/DashboardLeftside'
import DashboardRightside from './DashRighrtside/DashboardRightside'
import DashboardMobileMenu from './DashborardMobileMenu/DashboardMobileMenu'
import AccountAddForm from './AccountAddForm/AccountAddForm'

const AccountAdd =()=> {
    return(
        <>
        <DashboardMobileMenu />
        <div className="container-fluid">
            <div className="row">
                <DashboardLeftside desktopmenu={<DesktopMenuAddAccount />} />
                <DashboardRightside rightsidecontent={<AccountAddForm />}/>
            </div>
        </div>
        </>
    )
}
export default AccountAdd;