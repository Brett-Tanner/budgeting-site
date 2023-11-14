interface retrievedCategory {
  id: number;
  name: string;
  parent_id: number | null;
}

interface parsedTransaction {
  balance: string;
  category?: number;
  code: string;
  date: string;
  deposit: number;
  details: string;
  withdrawal: number;
}
