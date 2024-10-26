import React from 'react'
import { Row, Col } from 'react-bootstrap';
import RegisterForm from '../../components/LoginRegister/RegisterForm';

const Register = () => {
  return (
    <section className="mainSection container-fluid d-flex flex-column justify-content-center bgLogin">
      <Row>
        <Col md={6} className="text-center">
          <div className="text-light h-100">
            <h1 className="fondoArticulo rounded-5 display-1">
              Bienvenido a BarberKing
            </h1>
            <p className="fondoArticulo rounded-5 fs-5">
              Antes de poder gestionar tu turno, inicia sesión o registrate
            </p>
          </div>
        </Col>
        <Col md={6} className="m-auto">
          <RegisterForm />
        </Col>
      </Row>
    </section>
  );
}

export default Register
