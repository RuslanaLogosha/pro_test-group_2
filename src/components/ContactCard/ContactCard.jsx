import s from './ContactCard.module.css';
import LinkedinLogo from '../Svg/LinkedinLogo';
import GithubLogo from 'components/Svg/GithubLogo';

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
              <GithubLogo />
            </a>
          </li>
          <li className={s.item__social}>
            <a href={linkedin} target="blank">
              <LinkedinLogo />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default ContactCard;
