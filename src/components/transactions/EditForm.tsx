import { TransactionFields } from "./TransactionFields";

interface props {
  transactions: transaction[];
  uploadUrl: string;
}

export function EditForm({ transactions }: props) {
  return (
    <form onSubmit={() => {}}>
      <table>
        <tbody>
          {transactions.map((t) => (
            <TransactionFields transaction={t} key={t.toString()} />
          ))}
        </tbody>
      </table>
    </form>
  );
}
