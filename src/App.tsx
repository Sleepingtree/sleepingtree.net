import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Menu from './componets/layout/menu'
import Footer from './componets/layout/footer'

import Welcome from './componets/content/welcome'
import ContactInfo from './componets/content/contactInfo'

const App = () => {
  return (
    <Router>
      <Menu/>
      <main>
          <Route path='/' component={Welcome} exact />
          <Route path='/contact' component={ContactInfo} />
          <Route path='/projects' component={ContactInfo} />
      </main>
      <Footer/>
    </Router>
  )
}

export default App;
