// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListExecutorsCommand,
  ListExecutorsCommandInput,
  ListExecutorsCommandOutput,
} from "../commands/ListExecutorsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListExecutorsCommandInput,
  ...args: any
): Promise<ListExecutorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExecutorsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListExecutors(
  config: AthenaPaginationConfiguration,
  input: ListExecutorsCommandInput,
  ...additionalArguments: any
): Paginator<ListExecutorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExecutorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
