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
import ScrollToTop from './componets/helpers/scrollHook'
import { GlobalContextComponet } from './componets/helpers/globalContext';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
      <MobileContext>
        <GlobalContextComponet>
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
      </ScrollToTop>
    </Router>
  )
}

export default App;