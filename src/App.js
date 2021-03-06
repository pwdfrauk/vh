
import Home  from './components/Home/Home';
import Register  from './components/Register/Register';
import RegisterNoCode  from './components/RegisterNoCode/RegisterNoCode';
import RegisterAgrey  from './components/Register/RegisterAgrey/RegisterAgrey';
import Support  from './components/Support/Support';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import SupportForm from './components/Form/SupportForm/SupportForm';
import Error from './components/Error/Error'
import AccountSetting from './Dashboard/AccountSetting';
import { Switch, Route, } from 'react-router-dom';
import AccountAdd from './Dashboard/AccountAdd';
import AccountAddFav from './Dashboard/AccountAddFav'
import AccountGraph from './Dashboard/AccountGraph';
import AccountSettingFavAco from './Dashboard/AccountSettingFavAco';
function App() {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/register" component={Register}/>
        <Route path="/registernocode" component={RegisterNoCode}/>
        <Route path="/registeragrey" component={RegisterAgrey} />
        <Route path="/support" component={Support}/>
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/support" component={SupportForm}/>
        <Route path="/account" component={AccountSetting} />
        <Route path="/accountadd" component={AccountAdd} />
        <Route path='/account-add-fav' component={AccountAddFav} />
        <Route path="/account-graph" component={AccountGraph} />
        <Route path="/account-seeting-fav-aco" component={AccountSettingFavAco} />
        <Route component={Error}/>
      </Switch>
    </div>
  )
  
}

export default App;
