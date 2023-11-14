interface props {
  categories: retrievedCategory[];
  t: parsedTransaction;
}

export function TransactionFields({ categories, t }: props) {
  const change = t.deposit ? t.deposit : `-${t.withdrawal}`;

  return (
    <tr>
      <td>{t.date}</td>
      <td>
        <input
          type="text"
          name={`${t.details}${t.balance}_category`}
          id={`${t.details}${t.balance}_category`}
          defaultValue={t.code.concat(t.details)}
        />
      </td>
      <td>
        <select
          name={`${t.details}${t.balance}_category`}
          id={`${t.details}${t.balance}_category`}
        >
          {categories.map((c) => (
            <option value={c.id} key={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </td>
      <td>{`${change}円`}</td>
      <td>{`${t.balance}円`}</td>
    </tr>
  );
}
