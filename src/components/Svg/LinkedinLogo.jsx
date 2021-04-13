import s from './Svg.module.css';

function LinkedinLogo() {
  return (
    <>
      <svg
        className={s.logosocial}
        width="25"
        height="25"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M19.9951 20.0001V19.9993H20.0001V12.6643C20.0001 9.07593 19.2276 6.31177 15.0326 6.31177C13.0159 6.31177 11.6626 7.41843 11.1101 8.4676H11.0517V6.64677H7.07422V19.9993H11.2159V13.3876C11.2159 11.6468 11.5459 9.96343 13.7017 9.96343C15.8259 9.96343 15.8576 11.9501 15.8576 13.4993V20.0001H19.9951Z"
            fill=""
          />
          <path d="M0.330078 6.64746H4.47675V20H0.330078V6.64746Z" fill="" />
          <path
            d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0Z"
            fill=""
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default LinkedinLogo;
