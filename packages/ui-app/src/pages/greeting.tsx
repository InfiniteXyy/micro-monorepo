import { client } from "@xyz/lib-ui-core";

export function Greeting() {
  const { data } = client.greet.useQuery({ name: "Alice" });
  const { data: privateData } = client.privateGreet.useQuery({ name: "23" });

  return (
    <div>
      <div>{data?.greeting}</div>
      <div>{privateData?.greeting}</div>
    </div>
  );
}
