import s from './Svg.module.css';

function ArrowNextSvg() {
  return (
    <svg
      className={s.arrowNext}
      fill="black"
      width="24"
      height="16"
      viewBox="0 0 24 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.8535 7.6465L16.3535 0.146496C16.1582 -0.048832 15.8418 -0.048832 15.6465 0.146496C15.4512 0.341824 15.4512 0.65823 15.6465 0.853512L22.293 7.50001L0.500016 7.50001C0.223641 7.50001 0 7.72365 0 8.00003C0 8.2764 0.223641 8.50004 0.500016 8.50004L22.293 8.50004L15.6465 15.1465C15.4512 15.3418 15.4512 15.6582 15.6465 15.8535C15.7441 15.9512 15.8721 16 16 16C16.128 16 16.2559 15.9512 16.3536 15.8535L23.8536 8.35351C24.0488 8.15823 24.0488 7.84182 23.8535 7.6465Z" />
    </svg>
  );
}

export default ArrowNextSvg;