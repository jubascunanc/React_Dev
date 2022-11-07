import logo from './imagen/logo-emprende.png';
import './App.css';
import Banner from './imagen/clases-online.jpg'
import './Componentes/Nabvar/Navbar';
import './Componentes/Nabvar/Navbar.scss';
import Card from './Componentes/Item/Item';
import Bienvenida from './Componentes/Elementos/Bienvenida';
import Boton from './Componentes/Elementos/Boton';

function App() {

let bienvenida= 'Bienvenidos a Mprende App';
let Inscribete= 'Registrate Gratuitamente con un 40% dscto en tu beca';


  return (
    <div className="App">
      <header className="App-header">
      <div className="Navbar">
      <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <h2>Inscribete aquí</h2>
          <Boton prop={Inscribete}/>
        </nav>
        </div>
        <div className="Banner">
        <img src={Banner} />
       </div>
        <h3>
          <button>
          ¡Inicia Sesión Aquí!
          </button>
        </h3>
        <h1>
         <Bienvenida prop={bienvenida} />
        </h1>
        <h2>
          Cursos Online con profesores expertos en la educación virtual 100% certificado
        </h2>
          <div className="content-app">
          <p>
            Inscribete a nuestra plataforma de cursos online en modalidad Remoto e hibrido, para 
            aprender nuevas habilidades educativas y profesionales con otros alumnos en la comunidad.
          </p>
          </div>
          <div className="Card-details">
            <Card prop={Card}/>
          </div>
      </header>
    </div>
  );
}

export default App;
