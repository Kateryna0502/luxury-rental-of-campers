import icons from '../../images/sprite.svg';

const Icon = ({ id, width = 20, height = 20, color = 'main' }) => (
  <svg width={width} height={height} fill={`var(--${color})`}>
    <use xlinkHref={`${icons}#icon-${id}`} width={width} height={height} />
  </svg>
);

export default Icon;