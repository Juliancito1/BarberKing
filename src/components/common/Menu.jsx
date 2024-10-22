import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../img/LogoBarberia.png'

const Menu = () => {
  return (
    <Navbar expand="lg" className="navbarFondo">
      <Container>
        <Link className="navbar-brand" to={"/"}>
          <div className="logo">
            <img
              src={logo}
              className="w-100 rounded-circle"
              alt="logo barber king"
            />
          </div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={'/'} className="nav-link btn rounded-pill">
              Inicio
            </Link>
            <Link to={'/servicios'} className="nav-link btn rounded-pill mx-2">Nuestros Servicios</Link>
            <Link to={'/ingresar'} className="nav-link btn rounded-pill">Ingresar</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu
