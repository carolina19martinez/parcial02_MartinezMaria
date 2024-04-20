import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { BookCrear } from "../../componentes/Libros/BookCrear";
import { BookListar } from "../../componentes/Libros/BookListar";
import { BookAdmin } from "../../componentes/Libros/BookAdmin";
import { BookActualizar } from "../../componentes/Libros/BookActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/bookcre" element={<BookCrear />} />
      <Route path="/booklis" element={<BookListar />} />
      <Route path="/bookadm" element={<BookAdmin />} />

      <Route path="/bookactual/:codigo" element={<BookActualizar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
