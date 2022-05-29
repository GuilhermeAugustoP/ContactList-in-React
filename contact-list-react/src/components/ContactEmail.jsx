//SFC - Single File Component
const ContactEmail = () => {
  const contact = {
    name: 'asdasda@asdas.com',
    tel: '555-555-555',
  }
  return (
    <div>
        <p> Nome: {contact.name}</p>
        <p> Telefone: {contact.tel}</p>
    </div>
  );
}

export default ContactEmail;