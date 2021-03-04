import { join } from "./imports/path.ts";
import { gql } from "./imports/gql.ts";

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
    const file = readFileSync(join(Deno.cwd(), path));
    // @ts-ignore
    return gql`
      ${decoder.decode(file)}
    `;
  } catch (error) {
    console.error(new Error(`error parsing file [${path}]`));
    return {};
  }
}
