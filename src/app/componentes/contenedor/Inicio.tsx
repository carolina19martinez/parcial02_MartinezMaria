import developer1 from "../../../assets/img/harry-potter1.jpg"
import developer2 from "../../../assets/img/señor-anillos1.jpg"
import developer3 from "../../../assets/img/orgullo-prejuicio.jpg"
import developer4 from "../../../assets/img/cien-años.jpg"

export const Inicio = () => {
  return (
    <>
    <div className="pt-3 d-flex justify-content-center">
    <div className="col-md-8">
        <div className="h-100 p-5 text-bg-warning rounded-3">
          <h2>Bienvenido a esta página!</h2>
          <p>Ven y explora el mundo de los libros...</p>
          <button className="btn btn-outline-light" type="button">Ver más...</button>
        </div>
      </div>
    </div>
    <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img src={developer1} className="card-img-top" width="720" height="679" alt="Harry Potter" />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">Harry Potter</h4>
                  <p className="card-text" style={{textAlign: "justify"}}>
                  El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos 
                  hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa 
                  escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se 
                  convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, 
                  descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra 
                  filosofal que alarga la vida de quien la posee.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={developer2} className="card-img-top" alt="El señor de los anillos" />
                <div className="card-body">
                <h4 className="card-title fw-bolder">El señor de los anillos</h4>
                  <p className="card-text" style={{textAlign: "justify"}}>
                  En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y 
                  creó uno con el poder de esclavizar a toda la Tierra Media. Frodo Bolsón es un hobbit 
                  al que su tío Bilbo hace portador del poderoso Anillo Único con la misión de destruirlo. 
                  Acompañado de sus amigos, Frodo emprende un viaje hacia Mordor, el único lugar donde el 
                  anillo puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo para recuperar 
                  el anillo y acabar con la Tierra Media.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={developer3} className="card-img-top" alt="Orgullo y prejuicio" />
                <div className="card-body">
                <h4 className="card-title fw-bolder">Orgullo y prejuicio</h4>
                  <p className="card-text" style={{textAlign: "justify"}}>
                  Orgullo y prejuicio narra las aventuras y desventuras amorosas de las hermanas Bennet, 
                  centrándose en el personaje de Elizabeth, a través de las cuales la autora nos presenta 
                  con comicidad la sociedad de su tiempo y coloca a la mujer en un lugar más notorio que el 
                  que le correspondía en su época con la figura de la protagonista.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={developer4} className="card-img-top" width="720" height="656" alt="Cien años de soledad" />
                <div className="card-body">
                <h4 className="card-title fw-bolder">Cien años de soledad</h4>
                  <p className="card-text" style={{textAlign: "justify"}}>
                  Cien años de soledad trata un siglo en la vida de la familia Buendía, cuyo patriarca, 
                  José Arcadio Buendía, fundó el pueblo ficticio de Macondo, en Colombia. 
                  La novela es considerada una obra maestra de la literatura latinoamericana y uno de los 
                  ejemplos clásicos del realismo mágico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
}