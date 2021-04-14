import s from './Svg.module.css';
function AnimeSvg() {
  return (
    <>
      <svg
        width="63"
        height="11"
        viewBox="0 0 63 11"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="gg">
            <path
              id="heart"
              opacity="0.5"
              strokeWidth="1.7"
              d="M62.6709 0.8479H13.3371L4.7146 7.17843"
            />
          </g>
        </defs>
        <g>
          <circle cx="3.58423" cy="8" r="3" fill="white" />
        </g>
        {/* <g fill="none" opacity="0.6" stroke="#e96105" stroke-width="1">
          <use xlink href="#gg" />
        </g> */}
        <g
          className={s.anim}
          fill="none"
          stroke="#000"
          strokeWidth="1"
          strokeLinecap="butt"
        >
          <use href="#heart" />
        </g>
      </svg>
    </>
  );
}

export default AnimeSvg;
