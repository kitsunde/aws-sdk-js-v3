// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetNetworkResourcesCommand,
  GetNetworkResourcesCommandInput,
  GetNetworkResourcesCommandOutput,
} from "../commands/GetNetworkResourcesCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetNetworkResourcesCommandInput,
  ...args: any
): Promise<GetNetworkResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetNetworkResourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetNetworkResources(
  config: NetworkManagerPaginationConfiguration,
  input: GetNetworkResourcesCommandInput,
  ...additionalArguments: any
): Paginator<GetNetworkResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetNetworkResourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
