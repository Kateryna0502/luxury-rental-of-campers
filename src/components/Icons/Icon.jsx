import icons from '../../images/sprite.svg';

const Icon = ({ id, width = 20, height = 20, color = 'main' }) => (
  <svg width={width} height={height} fill={`var(--${color})`}>
    <use xlinkHref={`${icons}#icon-${id}`} width={width} height={height} />
  </svg>
);

export default Icon;

// import sprite from '../../assets/img/sprite.svg';

// const Icon = ({ id, width = 20, height = 20 }) => (
//   <svg width={width} height={height}>
//     <use href={`${sprite}#${id}`} />
//   </svg>
// );

// export default Icon;