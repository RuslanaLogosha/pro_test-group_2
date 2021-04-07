import { useState } from 'react';
import s from './Contacts.module.css';
import Contactcard from './ContantCard';
import contacJson from './usecontact';

function ContactsView() {
  const [card] = useState(contacJson);
  return (
    <main className={s.mainContainer}>
      <h2 className={s.title}>Our team</h2>
      <ul className={s.list}>
        {card.map(({ id, name, position, text, image }) => (
          <Contactcard
            key={id}
            name={name}
            position={position}
            text={text}
            image={image}
          />
        ))}
      </ul>
    </main>
  );
}

export default ContactsView;
