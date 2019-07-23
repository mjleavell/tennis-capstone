import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';
import PlayerProfile from '../components/pages/PlayerProfile/PlayerProfile';
import PlayerRankings from '../components/pages/PlayerRankings/PlayerRankings';
import Tournament from '../components/pages/Tournament/Tournament';
import TournamentProfile from '../components/pages/TournamentProfile/TournamentProfile';
import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route render={props => routeChecker(props)} />;
};

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   let routeChecker = props => (authed === true
//     ? (<Component {...props} {...rest} />)
//     : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
//   return <Route  render={props => routeChecker(props)} />;
// };

class App extends React.Component {
  // displayName = App.name

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <BrowserRouter>
          <Switch>
            <PublicRoute exact path='/' component={Home} authed={false} />
            <PublicRoute path='/home' component={Home} authed={false} />
            <PublicRoute path='/rankings' component={PlayerRankings} authed={false} />
            <PublicRoute path='/tournaments' component={Tournament} authed={false} />
            <PublicRoute path='/player' component={PlayerProfile} authed={false} />
            <PublicRoute path='/tournaments/:tournamentId' component={TournamentProfile} authed={false} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
