import { useState } from "react";
import { EditForm } from "./EditForm";
import { UploadForm } from "./UploadForm";
interface props {
  parseUrl: string;
  uploadUrl: string;
}

export function TransactionUploadApp({ parseUrl, uploadUrl }: props) {
  const [transactions, setTransactions] = useState<transaction[]>();

  if (transactions && transactions.length > 0) {
    return <EditForm transactions={transactions} uploadUrl={uploadUrl} />;
  } else {
    return <UploadForm setTransactions={setTransactions} parseUrl={parseUrl} />;
  }
}
