import React, { Component } from 'react'
import { Actions, Router, Scene } from 'react-native-router-flux'

import HomePage from '../components/HomePage'
import SplashPage from '../components/SplashPage'
// "react-native-router-flux": "aksonov/react-native-router-flux#revert-1549-master",

// const scenes = Actions.create(
//   <Scene key="root">
//     <Scene key="splashPage" component={SplashPage} title="Welcome to Rixi" initial={true} />
//     <Scene key="homePage" component={HomePage} title="Rixi Home" />
//   </Scene>
// );
//
// export default class RixiRouter extends Component {
//   render() {
//     return <Router scenes={scenes} />
//   }
// }

class OverrideRouter extends Router {
    constructor(props) {
        super(props);
        this.render = this.overrideRender;
    }
    overrideRender() {
        const result = super.render();
        if (!result) {
            return result;
        }
        // after first initialization use the regular render.
        this.render = super.render;
        if (this.props.onRouterInitialize) {
            // need this setTimeout to allow this method to complete so that the Actions.callback is populated
            setTimeout(this.props.onRouterInitialize, 10);
        }
        return result;
    }
}

export default class RixiRouter extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="splashPage" component={SplashPage} title="Welcome to Rixi" initial={true} />
        <Scene key="homePage" component={HomePage} title="Rixi Home" />
      </Scene>
    </Router>
  }
}
