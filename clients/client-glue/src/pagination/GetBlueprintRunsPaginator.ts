// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetBlueprintRunsCommand,
  GetBlueprintRunsCommandInput,
  GetBlueprintRunsCommandOutput,
} from "../commands/GetBlueprintRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetBlueprintRunsCommandInput,
  ...args: any
): Promise<GetBlueprintRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBlueprintRunsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetBlueprintRuns(
  config: GluePaginationConfiguration,
  input: GetBlueprintRunsCommandInput,
  ...additionalArguments: any
): Paginator<GetBlueprintRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetBlueprintRunsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
