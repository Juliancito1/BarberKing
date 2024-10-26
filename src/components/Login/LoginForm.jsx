import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = (formData) => {
    console.log(formData)
  }

  return (
    <section>
      <Form
        className="fondoArticulo text-light p-3 rounded-5"
        onSubmit={handleSubmit(login)}
      >
        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Nombre y Apellido</Form.Label>
          <Form.Control
            className="formInput"
            type="text"
            placeholder="Ej. Juan Perez"
            {...register("nombreapellido", {
              required: "El nombre y apellido es obligatorio",
              minLength: {
                value: 3,
                message: "Minimo 3 carácteres",
              },
              maxLength: {
                value: 30,
                message: "Maximo 30 carácteres",
              },
              pattern: {
                value: /^[A-Za-z\s]{3,30}$/,
              },
            })}
          ></Form.Control>
          <div className="text-danger">{errors.nombreapellido?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Contraseña</Form.Label>
          <Form.Control
            className="formInput"
            type="text"
            placeholder="Ej. juan123"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "La contraseña debe tener un mínimo de 8 carácteres",
              },
              maxLength: {
                value: 30,
                message: "La contraseña debe tener un máximo 30 carácteres",
              },
              pattern: {
                value: /^[A-Za-z0-9!@#$%^&*()_\-+=\[\]{}|:;,.?/~]{8,}$/,
                message:
                  "La contraseña puede contener letras, numeros y carácteres especiales",
              },
            })}
          ></Form.Control>
          <div className="text-danger">{errors.password?.message}</div>
        </Form.Group>
        <div className="text-end">
          <Button type="submit">Ingresar</Button>
        </div>
        <h6>
          ¿Olvidaste tu contraseña?{" "}
          <Link className="text-decoration-none">Haz Click Aqui</Link>
        </h6>
        <h6>
          ¿No tienes una cuenta?{" "}
          <Link className="text-decoration-none">Registrate Aqui</Link>
        </h6>
      </Form>
    </section>
  );
};

export default LoginForm;
