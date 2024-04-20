export const BookListar = () => {
  return (
    <>
      <div  className="pt-3 d-flex justify-content-center">
        <div className="col-md-8 " >
          <table className="table table-bordered border-warning">
            <thead>
              <tr>
                <th style={{width:"10%"}}>Código</th>
                <th style={{width:"50%"}}>Editorial</th>
                <th style={{width:"20%"}}>Encuadernado</th>
                <th style={{width:"20%"}} className="text-center">Genero</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Planeta</td>
                <td>Tapa blanda</td>
                <td className="text-center">Ciencia Ficción</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Booket</td>
                <td>Tapa dura</td>
                <td className="text-center">Suspenso</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Espasa</td>
                <td>Tapa dura</td>
                <td className="text-center">Realismo mágico</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Destino</td>
                <td>Tapa blanda</td>
                <td className="text-center">Romance</td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </>
  );
};