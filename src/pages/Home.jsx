import React from "react";
import Banner from "../components/Banner";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <section className="mainSection fondo">
      <div className="d-none d-md-inline">
        <Banner />
      </div>
      <article className="my-5 container text-light fondoArticulo rounded-5">
        <h1 className="text-center">
          <u>Bienvenido a Barber King</u>
        </h1>
        <p className="text-center fs-4">
          Nos proponemos a brindarte el mejor servicio de barberia al mejor
          precio
        </p>
        <div>
        <h2 className="mt-5">
          <u>¿Por qué elegirnos?</u>
        </h2>
        <p className="fs-4">
          Porque tenemos los mejores productos para tu pelo y/o barba
        </p>
        </div>
        <div>
        <h2 className="text-end mt-5">
          <u>No necesitas esperar</u>
        </h2>
        <p className="text-end fs-4">
          Porque tenemos los mejores productos para tu pelo y/o barba
        </p>
        </div>
        <div className="text-center my-5">
        <h3 className="text-center">No esperes mas gestiona tu turno YA!!!</h3>
        <Button className="btn-dark rounded-pill mb-5 fs-4">Gestionar Turno</Button>
        </div>
      </article>
    </section>
  );
};

export default Home;
