import type { APIRoute } from "astro";
import { parse } from "csv-parse";
import Encoding from "encoding-japanese";

export const POST: APIRoute = async ({ request }) => {
  if (!request.body)
    return new Response(JSON.parse("No file uploaded"), {
      status: 404,
    });

  const transactions = await parseCSV(request.body);

  return new Response(JSON.stringify(transactions), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};

async function parseCSV(csv: ReadableStream<Uint8Array>) {
  return new Promise(async (resolve) => {
    const transactions: transaction[] = [];

    const cavReader = csv.getReader();
    const parser = parse();
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
