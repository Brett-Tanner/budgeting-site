import { TransactionFields } from "./TransactionFields";

interface props {
  transactions: parsedTransaction[];
  uploadUrl: string;
}

export function EditForm({ transactions }: props) {
  return (
    <form onSubmit={() => {}}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Change</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <TransactionFields
              transaction={t}
              key={t.details.concat(t.balance)}
            />
          ))}
        </tbody>
      </table>
    </form>
  );
}
