import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';

import Menu from './componets/layout/menu'

import Welcome from './componets/content/welcome'
import ContactInfo from './componets/content/contactInfo'

const test = new Map<string, string>();
test.set("/", "Welcome");
test.set("/contact", "Contact info");

const App = () => {
  return (
    <Router>
      <Menu titleMaping={test}/>
      <main>
        <Container>
          <Route path='/' component={Welcome} exact />
          <Route path='/contact' component={ContactInfo} />
        </Container>
      </main>
    </Router>
  )
}

export default App;
