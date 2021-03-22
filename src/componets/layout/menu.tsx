import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

type MenuProps = {
  titleMaping: Map<string,string>
}

const Menu = ({titleMaping}: MenuProps) => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        {titleMaping.forEach((value, key) =>{
          <LinkContainer to={key}>
            <Navbar.Brand>{value}</Navbar.Brand>
          </LinkContainer>
        })}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu