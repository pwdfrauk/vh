
import Home  from './components/Home/Home';
import Register  from './components/Register/Register';
import RegisterNoCode  from './components/RegisterNoCode/RegisterNoCode';
import RegisterAgrey  from './components/Register/RegisterAgrey/RegisterAgrey';
import Support  from './components/Support/Support';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import SupportForm from './components/Form/SupportForm/SupportForm';
import Error from './components/Error/Error'
import {  Switch, Route, } from 'react-router-dom';
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
        <Route component={Error}/>
      </Switch>
    </div>
  )
  
}

export default App;
