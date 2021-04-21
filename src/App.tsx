import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import * as paths from './paths';

import Menu from './componets/layout/menu'
import Footer from './componets/layout/footer'

import Welcome from './componets/content/welcome'
import ReactPoject from './componets/content/reactProject'
import ThisSiteProject from './componets/content/thisSiteProject'
import DiscordBot from './componets/content/discordBot'
import MobileContext from './componets/helpers/mobilehelper';
import { GlobalContextComponet, GlobalContext, GlobalContextType } from './componets/helpers/globalContext';
import { useContext } from 'react';

const updateBodyDarkMode = (context: GlobalContextType) => {
  if (context.inverted) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
};

const App = () => {
  const context = useContext(GlobalContext);
  return (
    <Router>
      <MobileContext>
        <GlobalContextComponet>
        {updateBodyDarkMode(context)}
        <div id='page-container'>
          <div id="content-wrap">
            <Menu/>
            <main>
              <Route path={paths.baseUrl} exact
                render={() => (
                  <Welcome/>)
                } />
              <Route path={paths.projectsPath} exact component={ReactPoject} />
              <Route path={paths.thisSitePath} render={() => (
                <ThisSiteProject/>)
              } />
              <Route path={paths.discordBotPath}
                render={() => (
                  <DiscordBot/>)
                } />
            </main>
          </div>
          <Footer/>
        </div>
        </GlobalContextComponet>
      </MobileContext>
    </Router>
  )
}

export default App;