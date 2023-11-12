interface props {
  transaction: transaction;
}

export function TransactionFields({ transaction }: props) {
  return (
    <tr>
      <td>{transaction.toString()}</td>
    </tr>
  );
}
