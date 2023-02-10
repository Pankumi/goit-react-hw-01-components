import PropTypes from 'prop-types';
import style from 'components/statistics/Statistics.module.scss';

const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);
// console.log(randomColor);

export const Statistics = ({ title, stats }) => {
  // console.log(title);
  // console.log(stats);
  
  return (
    <section className={style.statistics}>
      {title && (<h2 className={style.title}>{title}</h2>)}
      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={style.item}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
