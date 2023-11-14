import { TransactionFields } from "./TransactionFields";

interface props {
  categories: retrievedCategory[];
  transactions: parsedTransaction[];
  uploadUrl: string;
}

export function EditForm({ categories, transactions }: props) {
  return (
    <form onSubmit={() => {}}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Change</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <TransactionFields
              categories={categories}
              t={t}
              key={t.details.concat(t.balance)}
            />
          ))}
        </tbody>
      </table>
    </form>
  );
}
