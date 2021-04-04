import s from './Contacts.module.css';
import photo from '../../images/Rectangle1.png';

function ContactsView() {
  return (
    <main className={s.mainContainer}>
      <div className={s.quoteContainer}>
        <h2 className={s.title}>Our team</h2>
        <ul className={s.list}>
          <li className={s.list__item}>
            <img src={photo} alt="" />
            <div className={s.text__conteiner}>
              <p className={s.name}>NAME</p>
              <p className={s.position}>Front-End Developer</p>
              <p className={s.text}>
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century.
              </p>
            </div>
          </li>
          <li className={s.list__item}>
            <img src={photo} alt="" />
            <div className={s.text__conteiner}>
              <p className={s.name}>NAME</p>
              <p className={s.position}>Front-End Developer</p>
              <p className={s.text}>
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century.
              </p>
            </div>
          </li>
          <li className={s.list__item}>
            <img src={photo} alt="" />
            <div className={s.text__conteiner}>
              <p className={s.name}>NAME</p>
              <p className={s.position}>Front-End Developer</p>
              <p className={s.text}>
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century.
              </p>
            </div>
          </li>
          <li className={s.list__item}>
            <img src={photo} alt="" />
            <div className={s.text__conteiner}>
              <p className={s.name}>NAME</p>
              <p className={s.position}>Front-End Developer</p>
              <p className={s.text}>
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century.
              </p>
            </div>
          </li>
          <li className={s.list__item}>
            <img src={photo} alt="" />
            <div className={s.text__conteiner}>
              <p className={s.name}>NAME</p>
              <p className={s.position}>Front-End Developer</p>
              <p className={s.text}>
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century.
              </p>
            </div>
          </li>
          <li className={s.list__item}>
            <img src={photo} alt="" />
            <div className={s.text__conteiner}>
              <p className={s.name}>NAME</p>
              <p className={s.position}>Front-End Developer</p>
              <p className={s.text}>
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century.
              </p>
            </div>
          </li>
          <li className={s.list__item}>
            <img src={photo} alt="" />
            <div className={s.text__conteiner}>
              <p className={s.name}>NAME</p>
              <p className={s.position}>Front-End Developer</p>
              <p className={s.text}>
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century.
              </p>
            </div>
          </li>
          <li className={s.list__item}>
            <img src={photo} alt="" />
            <div className={s.text__conteiner}>
              <p className={s.name}>NAME</p>
              <p className={s.position}>Front-End Developer</p>
              <p className={s.text}>
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default ContactsView;
