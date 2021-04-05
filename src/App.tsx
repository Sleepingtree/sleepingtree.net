import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import * as paths from './paths';

import Menu from './componets/layout/menu'
import Footer from './componets/layout/footer'

import Welcome from './componets/content/welcome'
import ReactPoject from './componets/content/reactProject'
import ThisSiteProject from './componets/content/thisSiteProject'
import DiscordBot from './componets/content/discordBot'


const props = {
  inverted: true
}

const updateBodyDarkMode = () => {
  if (props.inverted) {
    document.body.classList.add('dark');
  }else {
    document.body.classList.remove('dark');
  }
};

const App = () => {
  return (
    <Router>
      {updateBodyDarkMode()}
      <div id='page-container'>
      <div id="content-wrap">
      <Menu {...props} />
      <main>
        <Route path={paths.baseUrl} exact
          render={() => (
            <Welcome {...props} />)
          } />
        <Route path={paths.projectsPath} exact component={ReactPoject} />
        <Route path={paths.thisSitePath}  render={() => (
          <ThisSiteProject {...props} />)
        }/>
        <Route path={paths.discordBotPath}
         render={() => (
          <DiscordBot {...props} />)
        } /> 
      </main>
      </div>
      <Footer {...props} />
      </div>
    </Router>
  )
}

export default App;