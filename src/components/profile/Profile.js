import PropTypes from "prop-types";
import style from "components/profile/Profile.module.scss";
// console.log(style);

export const Profile = ({ user }) => {
  // console.log(user);
  const { username, tag, location, avatar, stats } = user;

  return (
      <div className={style.profile}>
        <div className={style.description}>
          <img src={avatar} alt="User avatar" className={style.avatar} />
          <p className={style.name}>{username}</p>
          <p className={style.tag}>@{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
          <li className={style.statsItem}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{stats.followers}</span>
          </li>
          <li className={style.statsItem}>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{stats.views}</span>
          </li>
          <li className={style.statsItem}>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
  );
};

Profile.propTypes = {
  // user: PropTypes.exact({  // не пропускає інших ключів
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  })
};
