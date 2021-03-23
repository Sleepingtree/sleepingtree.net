import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Menu from './componets/layout/menu'
import Footer from './componets/layout/footer'

import Welcome from './componets/content/welcome'
import ContactInfo from './componets/content/contactInfo'


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
        <Route path='/contact' component={ContactInfo} />
        <Route path='/projects' component={ContactInfo} />
      </main>
      <Footer {...props} />
    </Router>
  )
}

export default App;