import React from 'react';
import contactIcon from './img/contactIcon.png'
import tel from '../img/tel.png'

const ContactCard = ({ contactList }) => {
  return (
    <div className='ContactCard'>
      <img src="https://cdn-icons.flaticon.com/png/512/3059/premium/3059518.png?token=exp=1654042237~hmac=9677bc279d50e8106404613878bea529"></img>
      <div className="CardInfo">
        <p id='pName'> Nome: {contactList.name}</p>
        <p id='pNumber'> Telefone: {contactList.tel}</p>
      </div>
      <img src="../img/tel.png"></img>
    </div>
  );
}

export default ContactCard;