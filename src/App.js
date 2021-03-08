import Profile from './components/SocialProfile/Profile';
import Statistics from './components/Statistic/Statistics/Statistics';
import FriendsList from './components/Friends/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './components/SocialProfile/user.json';
import statisticalData from './components/Statistic/Statistics/statistical-data.json';
import friends from './components/Friends/FriendsList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendsList friends={friends} />
    <TransactionHistory items={transactions} />
    </div>);
    export default App;