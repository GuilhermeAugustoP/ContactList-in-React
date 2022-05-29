import { useEffect, useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard';
import ContactEmail from './components/ContactEmail';

// passar contact como props
// fazer uma lista com vários contatos
// tentar fazer, com o css, que a lista de contatos fique centralizada  
// https://www.figma.com/file/CzjCMffSrqqxNwX88xv9Ft/Contact-app-(Community)?node-id=0%3A1
//json com os dados do contato

//Component, props, state
function App() {
  //Hooks
  //get e set
  const [contacts, setContacts] = useState([]);

  const getContacts = useCallback(async () => {
    const response = await fetch('http://localhost:3333/contacts');
    const data = await response.json();
    return data;
  }, []);

  useEffect(() => {
    getContacts().then(response => {
      console.log(response)
      setContacts(response);
    });
  }, [getContacts]);

  return (
    <div className="App">
      {/* <ContactCard number={999} /> */}
      {/* <ContactCard string="abc" /> */}
      {/* <ContactCard obj={{}} /> */}
      {/* <ContactCard any={variable} /> */}

      {contacts.map((contacts, index) => (
        <ContactCard
          key={contacts.id}
          contacts={
            contacts
          }
        />))}
    </div>
  );
}

export default App;
