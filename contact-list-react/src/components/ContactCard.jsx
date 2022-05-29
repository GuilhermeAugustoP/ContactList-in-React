import { useEffect } from "react";
//props é do tipo Objeto
//As propriedades de props são os atributos que são passados para o componente.

const ContactCard = ({contacts}) => {
  // const contact = {
  //   name: 'Fulano',
  //   number: '99999999',
  // }

  useEffect(() => {
    console.log('contacts => ', contacts)
  }, [contacts]);
  
  return (
    <div>
        <p> Nome: {contacts.name}</p>
        <p> Telefone: {contacts.number}</p>
    </div>
  );
}

export default ContactCard;