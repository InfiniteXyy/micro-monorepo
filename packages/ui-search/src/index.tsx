import { client } from "@xyz/lib-ui-core";
import { useState } from "react";

export function SharedPage() {
  const [input, setInput] = useState("");
  const { data } = client.search.useQuery({ keyword: input });
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <ul>
        {data?.map((i) => (
          <li key={i.title}>{i.title}</li>
        ))}
      </ul>
    </div>
  );
}
