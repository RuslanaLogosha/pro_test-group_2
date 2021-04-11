import s from './Contacts.module.css';
import linkedinLogo from '../../images/linkedin.svg';
import gitHubLogo from '../../images/github-logo.svg';

function ContactCard({ image, name, position, text, linkedin, github }) {
  return (
    <li className={s.list__item}>
      <img src={image} alt="" />
      <div className={s.text__conteiner}>
        <p className={s.name}>{name}</p>
        <p className={s.position}>{position}</p>
        <ul className={s.list__social}>
          <li className={s.item__social}>
            <a href={github} target="blank">
              <img src={gitHubLogo} alt="logo github" width="25" />
            </a>
          </li>
          <li className={s.item__social}>
            <a href={linkedin} target="blank">
              <img src={linkedinLogo} alt="logo linkedin" width="25" />
            </a>
          </li>
        </ul>
        {/* <p className={s.text}>{text}</p> */}
      </div>
    </li>
  );
}

export default ContactCard;
