// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListVaultsCommand, ListVaultsCommandInput, ListVaultsCommandOutput } from "../commands/ListVaultsCommand";
import { GlacierClient } from "../GlacierClient";
import { GlacierPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlacierClient,
  input: ListVaultsCommandInput,
  ...args: any
): Promise<ListVaultsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVaultsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListVaults(
  config: GlacierPaginationConfiguration,
  input: ListVaultsCommandInput,
  ...additionalArguments: any
): Paginator<ListVaultsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVaultsCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof GlacierClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glacier | GlacierClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
