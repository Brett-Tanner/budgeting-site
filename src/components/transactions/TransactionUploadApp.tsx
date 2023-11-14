import { useState } from "react";
import { EditForm } from "./EditForm";
import { UploadForm } from "./UploadForm";
interface props {
  parseUrl: string;
  uploadUrl: string;
}

export function TransactionUploadApp({ parseUrl, uploadUrl }: props) {
  const [transactions, setTransactions] = useState<parsedTransaction[]>();
  const [categories, setCategories] = useState<retrievedCategory[]>();

  if (transactions && categories && transactions.length > 0) {
    return (
      <EditForm
        categories={categories}
        transactions={transactions}
        uploadUrl={uploadUrl}
      />
    );
  } else {
    return (
      <UploadForm
        parseUrl={parseUrl}
        setCategories={setCategories}
        setTransactions={setTransactions}
      />
    );
  }
}
