export const CancionCrear = () => {
  return (
    <>
    <div className="pt-4 d-flex justify-content-center">
    <form className="row g-3 needs-validation">
        <div className="col-md-6 position-relative">
          <label htmlFor="edit" className="form-label">Editorial</label>
          <input type="text" className="form-control border border-warning" id="edit" name="edit" required />
        </div>
        <div className="col-md-6 position-relative ">
          <label htmlFor="encu01" className="form-label">Encuadernado</label>
          <input type="text" className="form-control border border-warning" id="encu01" name="encu01" required />
        </div>

        <div className="col-md-6 position-relative">
          <label htmlFor="preci02" className="form-label">Precio</label>
          <input type="text" className="form-control border border-warning" id="preci02" name="preci02" required />
        </div>
        <div className="col-md-6 position-relative">
          <label htmlFor="gener03" className="form-label">Genero</label>
          <select className="form-control border border-warning" id="gener03" name="gener03" required >
            <option selected disabled value="">Seleccionar genero.</option>
            <option>...</option>
            <option>Ciencia Ficción</option>
            <option>Romance</option>
            <option>Realismo mágico</option>
            <option>Suspenso</option>
          </select>
        </div>

        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-warning" type="submit">Registrar libro </button>
        </div>
      </form>
    </div>
    </>
  );
};