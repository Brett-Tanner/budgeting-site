interface props {
  transaction: parsedTransaction;
}

export function TransactionFields({ transaction }: props) {
  const change = transaction.deposit
    ? transaction.deposit
    : `-${transaction.withdrawal}`;

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.code.concat(transaction.details)}</td>
      <td>{`${change}円`}</td>
      <td>{`${transaction.balance}円`}</td>
    </tr>
  );
}
