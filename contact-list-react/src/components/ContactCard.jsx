import React from 'react';

const ContactCard = () => {
  const contact = {
    name: 'Gui',
    tel: '3199999999',
  };
  
  return (
    <div>
        <p> Nome: {contact.name}</p>
        <p> Telefone: {contact.tel}</p>
    </div>
  );
}

export default ContactCard;