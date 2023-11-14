import type { APIRoute } from "astro";
import { parse } from "csv-parse";
import Encoding from "encoding-japanese";

export const POST: APIRoute = async ({ request }) => {
  if (!request.body)
    return new Response(JSON.parse("No file uploaded"), {
      status: 404,
    });

  const transactions = await parseCSV(request.body);
  // TODO: replace this with actual logic
  const testCategories = [
    { id: 1, name: "Food", parent_id: null },
    { id: 2, name: "Groceries", parent_id: 1 },
    { id: 3, name: "Games", parent_id: null },
  ];

  return new Response(
    JSON.stringify({ transactions: transactions, categories: testCategories }),
    {
      status: 200,
      headers: { "content-type": "application/json" },
    },
  );
};

async function parseCSV(csv: ReadableStream<Uint8Array>) {
  return new Promise(async (resolve) => {
    const transactions: parsedTransaction[] = [];

    const cavReader = csv.getReader();
    const parser = parse({
      columns: [
        "date",
        "code",
        "details",
        "withdrawal",
        "deposit",
        "balance",
        "memo",
        "uncleared_funds",
        "classification",
      ],
      from_line: 2,
    });
    parser.on("readable", function () {
      let transaction;
      while ((transaction = parser.read()) !== null) {
        transaction = transactions.push(transaction);
      }
      resolve(transactions);
    });

    parser.on("error", function (err) {
      console.error(err.message);
    });

    while (true) {
      let { value, done } = await cavReader.read();
      if (done) {
        break;
      } else {
        if (value) {
          value = Uint8Array.from(
            Encoding.convert(value, {
              to: "UTF8",
              from: "SJIS",
            }),
          );
          parser.write(value);
        }
      }
    }
  });
}
