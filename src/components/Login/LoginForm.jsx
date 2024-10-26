import React from 'react'
import { Form } from 'react-bootstrap'

const LoginForm = () => {
  return (
    <section>
      <Form className="fondoArticulo text-light p-3 rounded-5">
        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Nombre y Apellido</Form.Label>
          <Form.Control
            className="formInput"
            required
            type="text"
            placeholder="Ej. Juan Perez"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Contraseña</Form.Label>
          <Form.Control
            className="formInput"
            required
            type="text"
            placeholder="Ej. juan123"
          ></Form.Control>
        </Form.Group>
      </Form>
    </section>
  );
}

export default LoginForm
