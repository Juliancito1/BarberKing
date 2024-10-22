import { Link } from "react-router-dom";
import logo from "../../img/LogoBarberia.png";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="navbarFondo py-3">
      <Container>
        <article className="d-flex flex-column align-items-center ">
          <Link className="navbar-brand" to={"/"}>
            <div className="logoFooter">
              <img
                src={logo}
                className="w-100 rounded-circle"
                alt="logo barber king"
              />
            </div>
          </Link>
          <h2 className="text-light text-center">
            Todos los derechos reservados
          </h2>
          <ul className="list-unstyled d-md-flex">
            <li>
              <Link className="text-decoration-none text-center fs-5 p-2 nav-link rounded-pill">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none fs-5 p-2 nav-link  rounded-pill my-2 my-md-0 mx-md-2">
                Nuestros Servicios
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none fs-5 p-2 text-center nav-link rounded-pill">
                Ingresar
              </Link>
            </li>
          </ul>
        </article>
      </Container>
    </footer>
  );
}

export default Footer
