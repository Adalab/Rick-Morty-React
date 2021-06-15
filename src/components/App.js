import "../stylesheets/App.scss";

import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <form action="#">
          <label htmlFor="">Busca tu personaje preferido:</label>
          <input type="text" />
        </form>
        <section className="card">
          <img
            className="card__img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt=""
          />
          <h2 className="card__title">Nombre</h2>
          <ul>
            <li>Especie / Género</li>
            <li>Estado: </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
