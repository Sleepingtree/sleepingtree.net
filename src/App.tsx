import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

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
  }
};

const App = () => {
  return (
    <Router>
      {updateBodyDarkMode()}
      <Menu {...props} />
      <main>
        <Route path='/' exact
          render={() => (
            <Welcome {...props} />)
          } />
        <Route path='/projects' exact component={ReactPoject} />
        <Route path='/projects/reactSite/' component={ThisSiteProject}/>
        <Route path='/projects/discordBot/'
         render={() => (
          <DiscordBot {...props} />)
        } /> 
      </main>
      <Footer {...props} />
    </Router>
  )
}

export default App;