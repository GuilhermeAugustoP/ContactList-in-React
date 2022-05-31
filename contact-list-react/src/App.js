import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard';
import ContactCardHeader from './components/ContactCardHeader';

// passar contact como props
// fazer uma lista com vários contatos
// tentar fazer, com o css, que a lista de contatos fique centralizada  
// https://www.figma.com/file/CzjCMffSrqqxNwX88xv9Ft/Contact-app-(Community)?node-id=0%3A1

function App() {
  const contactList = [
    {
      name: 'Guilherme',
      tel: '3199999999'
    },
    {
      name: 'Augusto',
      tel: '319888888'
    },
    {
      name: 'Rochelle',
      tel: '31989898989'
    },
    {
      name: 'Adalgisberto',
      tel: '31756757575'
    }
  ]
  return (
    <>
    <div className="ContactHeader">
      <div className="ContactTitle"> 
        <ContactCardHeader/>
      </div>
    </div>
      <div className="App">
         {contactList.map((contactList, index) => (<ContactCard contactList={contactList}/>))}
      </div>
    </>
    
  );
}

export default App;
