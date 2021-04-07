import s from './Contacts.module.css';

function ContactCard({ image, name, position, text }) {
  return (
    <li className={s.list__item}>
      <img src={image} alt="" />
      <div className={s.text__conteiner}>
        <p className={s.name}>{name}</p>
        <p className={s.position}>{position}</p>
        <p className={s.text}>{text}</p>
      </div>
    </li>
  );
}

export default ContactCard;
