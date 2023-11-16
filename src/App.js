import './App.css';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <section className="carousel-section">
          <Grid/>
        </section>
        {/* <section className="cards-section">
          <h2>Featured Cards</h2>
        </section>
        <section className="recent-songs">
          <h2>Further Features</h2>
        </section> */}
        <br />
        <br />
      </main>
      {/* <footer>
        <p>&copy; 2023 Music App</p>
      </footer> */}
    </div>
  );
}

export default App;
