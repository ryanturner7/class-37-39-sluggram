import React from 'react';
import {Provider} from 'react-redux';
import {connect} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import appStoreCreate from '../../lib/app-store-create.js';
import * as util from '../../lib/util.js'
import {tokenSet} from '../../action/auth-actions'
import LandingContainer from '../landing-container';
import SettingsContainer from '../settings-container'
import DashboardContainer from '../dashboard-container';
import appStoreCreate from '../../lib/app-store-create.js'

class App extends React.Component {

componentDidMount(){
  let token = util.readCookie('X-Sluggram-Token')
  if(token){
    this.props.tokenSet(token)

  render(){
    return (
      <div className='app'>
          <BrowserRouter>
            <div>
              <header>
                  <h1> Hello World! </h1>
                  <nav>
                    <ul>
                      <li><Link to='/welcome/signup'> signup </Link></li>
                      <li><Link to='/welcome/login'> signup </Link></li>
                    </ul>
                  </nav>
                </header>
                  <Route exact path='/welcome/:auth' component={LandingContainer} />
                  <Route exact path='/settings' component={SettingsContainer} />
                  <Route exact path='/dashboard' component={DashboardContainer} />
            </div>
          </BrowserRouter>
      </div>
    )
  }

let mapStateToProps = (state) => ({
  profile: state.profile,
})
let mapDispatchToProps = (dispatch) => ({
  tokenSet: (token) => dispatch(tokenSet(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
