import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { CancionCrear } from "../../componentes/Canciones/CancionCrear";
import { CancionListar } from "../../componentes/Canciones/CancionListar";
import { CancionAdmin } from "../../componentes/Canciones/CancionAdmin";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/cancioncre" element={<CancionCrear />} />
      <Route path="/cancionlis" element={<CancionListar />} />
      <Route path="/cancionadm" element={<CancionAdmin />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
