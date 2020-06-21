import gql from "https://cdn.pika.dev/graphql-tag@^2.10.1";
import { red } from "https://deno.land/std/fmt/colors.ts";

const { readFileSync } = Deno;
/**
 * get and parse graphql file.
 * @param {string} path - graphql file path.
 * @return {object} graphql object.
 **/
export function importQL(path: string): object {
  if (!path.includes(".graphql")) {
    path = path + ".graphql";
  }

  try {
    const decoder = new TextDecoder("utf-8");
    const file = readFileSync(path);
    // @ts-ignore
    return gql`
      ${decoder.decode(file)}
    `;
  } catch (error) {
    console.error(new Error(`file [${red(path)}] not found`));
    return {};
  }
}
