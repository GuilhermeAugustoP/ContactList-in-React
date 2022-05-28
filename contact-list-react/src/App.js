import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard';

// passar contact como props
// fazer uma lista com vários contatos
// tentar fazer, com o css, que a lista de contatos fique centralizada  
// https://www.figma.com/file/CzjCMffSrqqxNwX88xv9Ft/Contact-app-(Community)?node-id=0%3A1

function App() {
  return (
    <div className="App">
      <ContactCard />
    </div>
  );
}

export default App;
