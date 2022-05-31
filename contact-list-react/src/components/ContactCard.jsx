import React from 'react';

const ContactCard = ({contactList}) => {
  return (
    <div>
        <p> Nome: {contactList.name}</p>
        <p> Telefone: {contactList.tel}</p>
    </div>
  );
}

export default ContactCard;