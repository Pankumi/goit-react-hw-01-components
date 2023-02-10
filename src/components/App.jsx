
import style from "components/App.module.css";

import userData from 'data/user.json';
import statisticData from 'data/statistics.json';
import friendsData from 'data/friends.json';
import transactions from 'data/transactions.json';

import {Profile} from 'components/profile/Profile';
import {Statistics} from 'components/statistics/Statistics';
import {FriendList} from 'components/friend_list/FriendList';
import {Transactions} from 'components/transactions/transactions';

export const App = () => {
  return (
    <div className={style.box}>
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statisticData}/>
      <FriendList friends={friendsData} />
      <Transactions items={transactions} />
    </div>
  );
};
