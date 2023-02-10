import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendBord.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  // console.log(isOnline);
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
