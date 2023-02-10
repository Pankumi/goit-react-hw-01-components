import PropTypes from 'prop-types';
import { TransactionHistory, Title, Content} from './Table.styled';

export const Transactions = ({ items }) => {
  //   console.log(items);
  return (
    <TransactionHistory>
      <thead>
        <Title>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Title>
      </thead>

      <tbody>
        {items.map((item, idx) => {
          const { id, type, amount, currency } = item;
          return (
            <Content key={id} row={idx % 2 !== 0}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </Content>
          );
        })}
      </tbody>
    </TransactionHistory>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};