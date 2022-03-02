import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../utils/api_context';
import { Transaction } from './transaction';

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(async () => {
    const resource = await api.get('/transactions');
    setTransactions(resource.transactions);
  }, [])

  return (
    <div>
      <div>Render your transactions here</div>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} key={transaction.id}/>
      ))}
    </div>
  )
};
