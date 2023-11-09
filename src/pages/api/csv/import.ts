import type { APIRoute } from "astro";
import { parse } from "csv-parse/sync";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const csv = formData.get("csv");

  if (csv instanceof File) {
    const text = await csv.text();

    const records = parse(text, {
      columns: true,
      skip_empty_lines: true,
    });
    console.log(records);
  }

  return redirect("/");
};
