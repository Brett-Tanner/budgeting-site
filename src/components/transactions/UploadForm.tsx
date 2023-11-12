import type { FormEvent } from "react";

interface props {
  parseUrl: string;
  setTransactions: React.Dispatch<
    React.SetStateAction<transaction[] | undefined>
  >;
}

export function UploadForm({ parseUrl, setTransactions }: props) {
  async function parseTransactions(e: FormEvent) {
    e.preventDefault();
    if (e.currentTarget instanceof HTMLFormElement) {
      const csv = new FormData(e.currentTarget).get("csv");
      const headers = new Headers({
        "Content-Type": "application/json",
      });
      const response = await fetch(parseUrl, {
        method: "POST",
        headers: headers,
        body: csv,
      }).catch((reason) => console.log(reason));
      if (response) setTransactions(await response.json());
    }
  }

  return (
    <form onSubmit={(e) => parseTransactions(e)}>
      <input type="file" name="csv" id="csv" />
      <button type="submit">Upload CSV</button>
    </form>
  );
}
