// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListProposalsCommand,
  ListProposalsCommandInput,
  ListProposalsCommandOutput,
} from "../commands/ListProposalsCommand";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ManagedBlockchainClient,
  input: ListProposalsCommandInput,
  ...args: any
): Promise<ListProposalsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProposalsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProposals(
  config: ManagedBlockchainPaginationConfiguration,
  input: ListProposalsCommandInput,
  ...additionalArguments: any
): Paginator<ListProposalsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProposalsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ManagedBlockchainClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ManagedBlockchain | ManagedBlockchainClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
