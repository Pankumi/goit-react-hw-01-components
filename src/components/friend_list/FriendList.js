import PropTypes from 'prop-types';
import styled from 'styled-components';
// import {Friends} from 'components/friend_list/Friends.styled.js';
import { FriendListItem } from 'components/friend_list/friend_list_item/FriendListItem';

const Friends = styled.ul`
  /* outline: 1px solid red; */
  margin: 50px auto 0 auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <Friends>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
