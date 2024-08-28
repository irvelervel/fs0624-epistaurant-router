import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
// il componente Link di react-router-dom altro non è che una speciale "ancora"
// che porta l'utente verso una determinata rotta -SENZA- ricaricare il browser

const CustomNavbar = function () {
  // useLocation è un react-hook di react-router-dom che ci fornirà info
  // sulla rotta corrente
  // REGOLE DEGLI HOOKS
  // 1) si possono utilizzare gli hooks solamente nei componenti React a FUNZIONE
  // 2) l'invocazione dell'hook va fatta prima del return e al di fuori di
  // cicli, condizioni, funzioni etc.

  const location = useLocation() // nome classico utilizzato nella documentazione
  console.log('OGGETTO LOCATION', location)

  // location.pathname è il percorso corrente nella barra degli indirizzi

  const [linkUrls, setLinkUrls] = useState([
    { path: '/', name: 'Home' },
    { path: '/menu', name: 'Menu' },
    { path: '/booking', name: 'Prenotazioni' },
    { path: '/contact', name: 'Contatti' },
    { path: '/admin', name: 'Admin' },
  ])

  const addActiveOrNot = (path) => {
    return location.pathname === '/' + path ? 'nav-link active' : 'nav-link'
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand>Epistaurant</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* il Link a "/" deve ricevere anche la classe "active" 
            se location.pathname === "/" */}
            <Link to="/" className={addActiveOrNot('')}>
              Home
            </Link>
            <Link
              to="/menu"
              className={`nav-link${
                location.pathname === '/menu' ? ' active' : ''
              }`}
            >
              Menu
            </Link>
            <Link
              to="/booking"
              className={`nav-link ${
                location.pathname === '/booking' && ' active'
              }`}
            >
              Prenotazioni
            </Link>
            <Link to="/contact" className={addActiveOrNot('contact')}>
              Contattaci
            </Link>
            <Link to="/admin" className={addActiveOrNot('admin')}>
              Admin
            </Link>

            {/* {linkUrls.map((linkObject) => {
              return (
                <Link
                  key={linkObject.path}
                  to={linkObject.path}
                  className={`nav-link${
                    location.pathname === linkObject.path ? ' active' : ''
                  }`}
                >
                  {linkObject.name}
                </Link>
              )
            })} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
