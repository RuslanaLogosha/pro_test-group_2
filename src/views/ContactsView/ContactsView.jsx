import { useState } from 'react';
import s from './Contacts.module.css';
import ContactCard from '../../components/ContactCard';
import userContacts from './userContacts';
import Container from '../../components/Container';

function ContactsView() {
  const [card] = useState(userContacts);
  return (
    <Container>
      <main className={s.mainContacts}>
        <h2 className={s.title}>Our team</h2>
        <ul className={s.list}>
          {card.map(({ id, name, position, text, image, linkedin, github }) => (
            <ContactCard
              key={id}
              name={name}
              position={position}
              text={text}
              image={image}
              linkedin={linkedin}
              github={github}
            />
          ))}
        </ul>
      </main>
    </Container>
  );
}

export default ContactsView;
